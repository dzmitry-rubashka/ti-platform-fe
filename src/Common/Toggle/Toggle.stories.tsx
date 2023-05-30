import { ComponentMeta, ComponentStory } from "@storybook/react";
import Toggle from ".";

export default {
  title: "Toggle",
  component: Toggle,
  argTypes: {
    size: {
      type: "string",
      description: "The ability to change size",
      table: {
        defaultValue: { summary: "regular" },
      },
      options: ["regular", "large"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  size: "regular",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};
