import { ComponentMeta, ComponentStory } from "@storybook/react";
import Spinner from ".";

export default {
  title: "Spinner",
  component: Spinner,
  argTypes: {
    size: {
      description: "The ability to choose spinner's size",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "xlarge" },
      },
    },
    color: {
      description:
        "The ability to change spinner's color. 'True' means white color (invisible on white background)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const XLarge = Template.bind({});
XLarge.args = {
  size: "xlarge",
};
export const Large = Template.bind({});
Large.args = {
  size: "large",
};
export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};
export const Small = Template.bind({});
Small.args = {
  size: "small",
};
export const XSmall = Template.bind({});
XSmall.args = {
  size: "xsmall",
};
