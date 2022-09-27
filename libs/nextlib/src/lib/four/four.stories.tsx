import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Four } from './four';

const Story: ComponentMeta<typeof Four> = {
  component: Four,
  title: 'Four',
};
export default Story;

const Template: ComponentStory<typeof Four> = (args) => <Four {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
