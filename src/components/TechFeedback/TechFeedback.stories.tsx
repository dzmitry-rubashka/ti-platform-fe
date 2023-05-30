import { ComponentMeta, ComponentStory } from "@storybook/react";
import TechFeedback from ".";

export default {
  title: "TechFeedback",
  component: TechFeedback,
  argTypes: {
    technology: {
      type: "string",
      description: "Technology for which the feedback",
      defaultValue: "JavaScript",
    },
  },
} as ComponentMeta<typeof TechFeedback>;

const Template: ComponentStory<typeof TechFeedback> = (args) => (
  <TechFeedback {...args} />
);

export const Default = Template.bind({});
Default.args = {
  technology: "JavaScript",
};
