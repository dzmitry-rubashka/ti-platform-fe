import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tab from ".";

export default {
  title: "Tab",
  component: Tab,
  argTypes: {
    options: {
      description:
        "The ability to write an array of objects. Each object has 2 keys: name and component (string values)",
      defaultValue: [
        { name: "HR Notes", component: <div>content 1</div> },
        { name: "CV", component: <div>content 2</div> },
        { name: "TechFeedback", component: <div>content 3</div> },
        { name: "FinalFeedback", component: <div>content 4</div> },
      ],
    },
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { name: "HR Notes", component: <div>content 1</div> },
    { name: "CV", component: <div>content 2</div> },
    { name: "TechFeedback", component: <div>content 3</div> },
    { name: "FinalFeedback", component: <div>content 4</div> },
  ],
};
