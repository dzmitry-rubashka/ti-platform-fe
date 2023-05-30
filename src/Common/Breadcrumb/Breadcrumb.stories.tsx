import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Breadcrumb from ".";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    steps: {
      description: "The ability to write an array of objects.",
    },
  },
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <BrowserRouter>
    <Breadcrumb {...args} />
  </BrowserRouter>
);

export const DefaultSteps = Template.bind({});
DefaultSteps.args = {
  steps: [
    { id: 1, name: "page 1", path: "/1" },
    { id: 2, name: "page 2", path: "/2" },
    { id: 3, name: "page 3", path: "/3" },
  ],
};

export const longArrayOfSteps = Template.bind({});
longArrayOfSteps.args = {
  steps: [
    { id: 1, name: "page 1", path: "/1" },
    { id: 2, name: "page 2", path: "/2" },
    { id: 3, name: "page 3", path: "/3" },
    { id: 4, name: "page 4", path: "/4" },
    { id: 5, name: "page 5", path: "/5" },
    { id: 6, name: "page 6", path: "/6" },
    { id: 7, name: "page 7", path: "/7" },
    { id: 8, name: "page 8", path: "/8" },
    { id: 9, name: "page 9", path: "/9" },
    { id: 10, name: "page 10", path: "/10" },
  ],
};
export const longStepName = Template.bind({});
longStepName.args = {
  steps: [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed quidem quasi suscipit tempora.",
      path: "/1",
    },
    { id: 2, name: "page 2", path: "/2" },
  ],
};
