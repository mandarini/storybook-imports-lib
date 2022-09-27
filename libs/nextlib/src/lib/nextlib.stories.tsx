import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Nextlib } from './nextlib';

const Story: ComponentMeta<typeof Nextlib> = {
  component: Nextlib,
  title: 'Nextlib',
};
export default Story;

const Template: ComponentStory<typeof Nextlib> = (args) => (
  <Nextlib {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
