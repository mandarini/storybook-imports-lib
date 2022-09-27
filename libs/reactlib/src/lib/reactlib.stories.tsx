import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Reactlib } from './reactlib';

const Story: ComponentMeta<typeof Reactlib> = {
  component: Reactlib,
  title: 'Reactlib',
};
export default Story;

const Template: ComponentStory<typeof Reactlib> = (args) => (
  <Reactlib {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
