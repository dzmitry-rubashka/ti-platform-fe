import { ComponentMeta, ComponentStory } from "@storybook/react";
import Notification from ".";

export default {
  title: "Notification",
  component: Notification,
  argTypes: {
    variant: {
      type: "string",
      description: "The ability to choose Notification theme option",
      options: ["colored", "light"],
      defaultValue: "colored",
    },
    type: {
      type: "string",
      description: "The ability to choose Notification type option",
      options: ["info", "success", "error", "warning"],
      defaultValue: "info",
    },
    title: {
      type: "string",
      description: "Title of the notification",
      defaultValue: "Hey, did you know...",
    },
    description: {
      type: "string",
      description: "Description of the notification",
      defaultValue:
        "This alert needs your attention, but its not super important.",
    },
    confirmButtonTitle: {
      type: "string",
      description: "Title of the confirm button",
      defaultValue: "Understood",
    },
    rejectButtonTitle: {
      type: "string",
      description: "Title of the reject button",
      defaultValue: "No thanks",
    },
    confirmButtonHandleClick: {
      type: "function",
      description: "onClick event function of the confirm button",
      defaultValue: () => {},
    },
    rejectButtonHandleClick: {
      type: "function",
      description: "onClick event function of the reject button",
      defaultValue: () => {},
    },
  },
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const ColoredInfo = Template.bind({});
ColoredInfo.args = {
  variant: "colored",
  type: "info",
  title: "Hey, did you know...",
  description: "This alert needs your attention, but its not super important.",
  confirmButtonTitle: "Understood",
  rejectButtonTitle: "No thanks",
  confirmButtonHandleClick: () => {},
  rejectButtonHandleClick: () => {},
};

export const LightInfo = Template.bind({});
LightInfo.args = {
  variant: "light",
  type: "info",
  title: "Hey, did you know...",
  description: "This alert needs your attention, but its not super important.",
  confirmButtonTitle: "Understood",
  rejectButtonTitle: "No thanks",
  confirmButtonHandleClick: () => {},
  rejectButtonHandleClick: () => {},
};

export const ColoredError = Template.bind({});
ColoredError.args = {
  variant: "colored",
  type: "error",
  title: "Hey, did you know...",
  description: "This alert needs your attention, but its not super important.",
  confirmButtonTitle: "Understood",
  rejectButtonTitle: "No thanks",
  confirmButtonHandleClick: () => {},
  rejectButtonHandleClick: () => {},
};

export const LightError = Template.bind({});
LightError.args = {
  variant: "light",
  type: "info",
  title: "Hey, did you know...",
  description: "This alert needs your attention, but its not super important.",
  confirmButtonTitle: "Understood",
  rejectButtonTitle: "No thanks",
  confirmButtonHandleClick: () => {},
  rejectButtonHandleClick: () => {},
};

export const ColoredWarning = Template.bind({});
ColoredWarning.args = {
  variant: "colored",
  type: "warning",
  title: "Hey, did you know...",
  description: "This alert needs your attention, but its not super important.",
  confirmButtonTitle: "Understood",
  rejectButtonTitle: "No thanks",
  confirmButtonHandleClick: () => {},
  rejectButtonHandleClick: () => {},
};

export const LightWarning = Template.bind({});
LightWarning.args = {
  variant: "light",
  type: "warning",
  title: "Hey, did you know...",
  description: "This alert needs your attention, but its not super important.",
  confirmButtonTitle: "Understood",
  rejectButtonTitle: "No thanks",
  confirmButtonHandleClick: () => {},
  rejectButtonHandleClick: () => {},
};

export const ColoredSuccess = Template.bind({});
ColoredSuccess.args = {
  variant: "colored",
  type: "success",
  title: "Hey, did you know...",
  description: "This alert needs your attention, but its not super important.",
  confirmButtonTitle: "Understood",
  rejectButtonTitle: "No thanks",
  confirmButtonHandleClick: () => {},
  rejectButtonHandleClick: () => {},
};

export const LightSuccess = Template.bind({});
LightSuccess.args = {
  variant: "light",
  type: "success",
  title: "Hey, did you know...",
  description: "This alert needs your attention, but its not super important.",
  confirmButtonTitle: "Understood",
  rejectButtonTitle: "No thanks",
  confirmButtonHandleClick: () => {},
  rejectButtonHandleClick: () => {},
};
