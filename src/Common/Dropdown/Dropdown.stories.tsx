import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from ".";

export default {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {
    type: {
      type: "string",
      description: "The ability to change select type",
      table: {
        defaultValue: { summary: "general select" },
      },
      options: ["general select", "checkbox", "radio"],
      control: {
        type: "radio",
      },
    },
    options: {
      description: "The ability to write strings as items to choose",
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const GeneralSelect = Template.bind({});
GeneralSelect.args = {
  type: "general select",
  options: [],
};
export const Checkbox = Template.bind({});
Checkbox.args = {
  type: "checkbox",
  options: [],
};
export const Radio = Template.bind({});
Radio.args = {
  type: "radio",
  options: [],
};
