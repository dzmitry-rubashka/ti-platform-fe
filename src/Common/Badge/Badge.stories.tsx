import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from ".";

export default {
  title: "Badge",
  component: Badge,
  argTypes: {
    count: {
      description: "Badge displays the number of any items",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 0 },
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 0,
};
