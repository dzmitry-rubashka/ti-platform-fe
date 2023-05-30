import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProgressBar from ".";

export default {
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: {
      description: "The ability to write progress %",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 0 },
      },
    },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  progress: 0,
};
