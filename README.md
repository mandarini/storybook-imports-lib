# Storybook React Next.js issue

The issue started on v.14.7.6. Versions before that work fine.

## Issue description

Storybook with Next.js needs the following of addons to work:

- `storybook-addon-next`
- `storybook-addon-swc`
- `@nrwl/react/plugins/storybook`

You can see these addons defined in the [`apps/nextapp/.storybook/main.js`](apps/nextapp/.storybook/main.js) file.

Starting with version 14.7.6, the `@nrwl/react/plugins/storybook` creates an issue on the `storybook-addon-next` addon.

This results in a broken build, and Storybook cannot be started (or built).

The error happens on line 21 of the following file in the `storybook-addon-next` repository:

[storybook-addon-next/src/images/webpack.ts](https://github.com/RyanClementsHax/storybook-addon-next/blob/main/src/images/webpack.ts):

```
  assetRule.test = /\.(apng|eot|otf|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
```

`assetRule` is undefined, so it throws an error.

<details>
  <summary>Click here to view the full error log</summary>

```
nx storybook nextapp

> nx run nextapp:storybook

info @storybook/react v6.5.12
info
info => Loading presets
info Addon-docs: using MDX1
=> Loading Nrwl React Storybook preset from "@nrwl/react/plugins/storybook"

info => Ignoring cached manager due to change in manager config
ERR! TypeError: Cannot set properties of undefined (setting 'test')
ERR!     at configureStaticImageImport (/Users/katerina/Projects/nrwl/test_nx_workspaces/addons-imports/node_modules/storybook-addon-next/dist/images/webpack.js:21:20)
ERR!     at configureImages (/Users/katerina/Projects/nrwl/test_nx_workspaces/addons-imports/node_modules/storybook-addon-next/dist/images/webpack.js:8:5)
ERR!     at /Users/katerina/Projects/nrwl/test_nx_workspaces/addons-imports/node_modules/storybook-addon-next/dist/preset.js:32:35
ERR!     at Generator.next (<anonymous>)
ERR!     at fulfilled (/Users/katerina/Projects/nrwl/test_nx_workspaces/addons-imports/node_modules/tslib/tslib.js:115:62)
ERR!  TypeError: Cannot set properties of undefined (setting 'test')
ERR!     at configureStaticImageImport (/Users/katerina/Projects/nrwl/test_nx_workspaces/addons-imports/node_modules/storybook-addon-next/dist/images/webpack.js:21:20)
ERR!     at configureImages (/Users/katerina/Projects/nrwl/test_nx_workspaces/addons-imports/node_modules/storybook-addon-next/dist/images/webpack.js:8:5)
ERR!     at /Users/katerina/Projects/nrwl/test_nx_workspaces/addons-imports/node_modules/storybook-addon-next/dist/preset.js:32:35
ERR!     at Generator.next (<anonymous>)
ERR!     at fulfilled (/Users/katerina/Projects/nrwl/test_nx_workspaces/addons-imports/node_modules/tslib/tslib.js:115:62)

WARN Broken build, fix the error above.
...
```

</details>

## Potential causes

It seems that [this commit](https://github.com/nrwl/nx/commit/f49769a34a7f47d252648132793cddd2612262ee), and specifically the changes to the file [packages/react/plugins/storybook/index.ts](https://github.com/nrwl/nx/blame/master/packages/react/plugins/storybook/index.ts), might be the cause of the issue. It looks like the function `getBaseWebpackPartial` changed, which affected the webpack output, which is potentially used by the `storybook-addon-next` addon. [Here is the previous version of the `getBaseWebpackPartial` function](https://github.com/nrwl/nx/commit/f49769a34a7f47d252648132793cddd2612262ee#diff-819766eb87503fdfe9cdcdcec25f3c4fc4f0d15ff1fa422b8e465c9dcbcbe26dL17).

## Steps to reproduce

1. `yarn` to install dependencies
2. `nx storybook nextapp` to start Storybook

### Verify that previous version of Nx works

1. `git checkout test/v14-7-5`
2. `yarn` to install dependencies
3. `nx storybook nextapp` to start Storybook
