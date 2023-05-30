import { ComponentMeta, ComponentStory } from "@storybook/react";
import Mention from ".";

export default {
  title: "Mention",
  component: Mention,
  argTypes: {
    type: {
      type: "string",
      description: "The ability to choose Mention display option",
      options: ["primary", "secondary"],
      defaultValue: "primary",
    },
    username: {
      type: "string",
      description: "Displays the username mentioned",
      defaultValue: "User Name",
    },
  },
} as ComponentMeta<typeof Mention>;

const Template: ComponentStory<typeof Mention> = (args) => (
  <Mention {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  username: "User Name",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  username: "User Name",
};
