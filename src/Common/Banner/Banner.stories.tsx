import { ComponentStory, ComponentMeta } from "@storybook/react";
import Banner from ".";

export default {
  title: "Banner",
  component: Banner,
  argTypes: {
    title: {
      description: "The ability to change the title signature",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "This is a warning" },
      },
    },
    type: {
      type: "string",
      description: "The ability to change background color",
      table: {
        defaultValue: { summary: "warning" },
      },
      options: ["warning", "info", "error"],
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  title: "This is a warning",
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
  title: "This is some info",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  title: "The apocalypse is coming and zombies are on the loose",
};
