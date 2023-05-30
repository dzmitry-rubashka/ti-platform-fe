import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from ".";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    type: {
      type: "string",
      description: "The ability to change type of checkbox",
      table: {
        defaultValue: { summary: "active" },
      },
      options: ["active", "inactive", "disabled"],
      control: {
        type: "radio",
      },
    },
    title: {
      description: "The ability to write title",
      table: {
        defaultValue: { summary: "active" },
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Active = Template.bind({});
Active.args = {
  type: "active",
  title: "active",
};
export const Inactive = Template.bind({});
Inactive.args = {
  type: "inactive",
  title: "inactive",
};
export const Disabled = Template.bind({});
Disabled.args = {
  type: "disabled",
  title: "disabled",
};
