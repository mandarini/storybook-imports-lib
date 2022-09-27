import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Five } from './five';

const Story: ComponentMeta<typeof Five> = {
  component: Five,
  title: 'Five',
};
export default Story;

const Template: ComponentStory<typeof Five> = (args) => <Five {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
