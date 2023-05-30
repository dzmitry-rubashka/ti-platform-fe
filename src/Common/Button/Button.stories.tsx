import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      type: "string",
      description: "The ability to choose Button size",
      options: ["small", "large"],
      defaultValue: "small",
    },
    variant: {
      type: "string",
      description: "The ability to choose Button variant",
      options: [
        "primary",
        "secondary",
        "subtle",
        "warning",
        "danger",
        "light",
        "colored",
      ],
      defaultValue: "primary",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Click me</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  size: "small",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "small",
  variant: "secondary",
};

export const Subtle = Template.bind({});
Subtle.args = {
  size: "small",
  variant: "subtle",
};

export const Warning = Template.bind({});
Warning.args = {
  size: "small",
  variant: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  size: "small",
  variant: "danger",
};

export const Light = Template.bind({});
Light.args = {
  size: "small",
  variant: "light",
};

export const Colored = Template.bind({});
Colored.args = {
  size: "small",
  variant: "colored",
};
