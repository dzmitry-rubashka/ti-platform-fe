import { ComponentMeta, ComponentStory } from "@storybook/react";
import DefaultIcon from "assets/images/DeafaultProfileIcon.jpg";
import ProfileIcon from ".";

export default {
  title: "ProfileIcon",
  component: ProfileIcon,
  argTypes: {
    size: {
      description: "The ability to choose icon's size",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "xxlarge" },
      },
    },
    alt: {
      table: {
        defaultValue: { summary: "xxlarge" },
      },
    },
  },
} as ComponentMeta<typeof ProfileIcon>;

const Template: ComponentStory<typeof ProfileIcon> = (args) => (
  <ProfileIcon {...args} />
);

export const XXLarge = Template.bind({});
XXLarge.args = {
  size: "xxlarge",
  alt: "xxlarge",
  src: DefaultIcon,
};
export const XLarge = Template.bind({});
XLarge.args = {
  size: "xlarge",
  alt: "xlarge",
  src: DefaultIcon,
};
export const Large = Template.bind({});
Large.args = {
  size: "large",
  alt: "large",
  src: DefaultIcon,
};
export const Normal = Template.bind({});
Normal.args = {
  size: "normal",
  alt: "normal",
  src: DefaultIcon,
};
export const Small = Template.bind({});
Small.args = {
  size: "small",
  alt: "small",
  src: DefaultIcon,
};
