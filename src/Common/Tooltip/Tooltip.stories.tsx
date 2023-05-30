import { ComponentMeta, ComponentStory } from "@storybook/react";
import GlobeIcon from "assets/icons/GlobeIcon";
import Tooltip from ".";

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    tooltipText: {
      description: "The ability to write tooltip text",
    },
    maxWidth: {
      description: "The ability to change max-width",
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>Tooltip</Tooltip>
);
const TemplateWithImg: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <GlobeIcon />
  </Tooltip>
);

export const DefaultTooltip = Template.bind({});
DefaultTooltip.args = {
  tooltipText: "Lorem Ipsum is simply dummy text of the printing",
};
export const DefaultTooltipImg = TemplateWithImg.bind({});
DefaultTooltipImg.args = {
  tooltipText: "Lorem Ipsum is simply dummy text of the printing",
};
export const LargeTooltip = Template.bind({});
LargeTooltip.args = {
  tooltipText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  maxWidth: 33,
};
export const LargeTooltipImg = TemplateWithImg.bind({});
LargeTooltipImg.args = {
  tooltipText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  maxWidth: 33,
};
