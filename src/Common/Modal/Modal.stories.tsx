import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal from ".";

export default {
  title: "Modal",
  component: Modal,
  argTypes: {
    title: {
      type: "string",
      description: "The ability to change title",
    },
    size: {
      type: "string",
      description: "The ability to change size",
      table: {
        defaultValue: { summary: "xLarge" },
      },
      options: ["xLarge", "large", "medium", "small"],
      control: {
        type: "radio",
      },
    },
    type: {
      type: "string",
      description: "The ability to change type",
      table: {
        defaultValue: { summary: "default" },
      },
      options: ["warning", "danger", "scrollable", "default"],
      control: {
        type: "radio",
      },
    },
    text: {
      type: "string",
      description: "The ability to change text",
    },
    textButton: {
      type: "string",
      description: "The ability to change textButton",
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Warning = Template.bind({});
Warning.args = {
  title: "Warning",
  size: "xLarge",
  type: "default",
  text: "This is place holder text. The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that does not support user tasks.",
  textButton: "Warning",
};
export const Danger = Template.bind({});
Danger.args = {
  title: "Danger",
  size: "xLarge",
  type: "danger",
  text: "This is place holder text. The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that does not support user tasks.",
  textButton: "Danger",
};
export const Scrollable = Template.bind({});
Scrollable.args = {
  title: "Scrollable",
  size: "xLarge",
  type: "scrollable",
  text: "This is place holder text. The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that does not support user tasks.",
  textButton: "Scrollable",
};
export const Default = Template.bind({});
Default.args = {
  title: "Default",
  size: "xLarge",
  type: "default",
  text: "This is place holder text. The basic dialog for modals should contain only valuable and relevant information. Simplify dialogs by removing unnecessary elements or content that does not support user tasks.",
  textButton: "Default",
};
