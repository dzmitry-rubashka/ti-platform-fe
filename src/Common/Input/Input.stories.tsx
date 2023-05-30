import { ComponentMeta, ComponentStory } from "@storybook/react";
import GlobeIcon from "assets/icons/GlobeIcon";
import Input from ".";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <GlobeIcon />,
  placeholder: "Text",
  disabled: true,
};
export const Error = Template.bind({});
Error.args = {
  icon: <GlobeIcon />,
  placeholder: "Text",
  error: true,
};
export const Success = Template.bind({});
Success.args = {
  icon: <GlobeIcon />,
  placeholder: "Text",
  success: true,
};
export const FieldLabel = Template.bind({});
FieldLabel.args = {
  icon: <GlobeIcon />,
  placeholder: "Text",
  fieldLabel: "example label",
};
