import React from "react";
import { withDesign } from "storybook-addon-designs";
import {BUTTON_SIZE} from "@/src/components/atoms/enums";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
};

Primary.parameters = {
  design: {
    type: "figma",
    url:
        "your-figma-link",
  },
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: BUTTON_SIZE.LARGE,
  label: 'Button',
  color: 'grey'
};

export const Medium = Template.bind({});

Medium.args = {
  size: BUTTON_SIZE.MEDIUM,
  label: 'Button',
  color: 'green'
};

export const Small = Template.bind({});
Small.args = {
  size: BUTTON_SIZE.SMALL,
  label: 'Button',
};

