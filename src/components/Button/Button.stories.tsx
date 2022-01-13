import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  text: "Primary Button",
  size: 'medium',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  text: "Secondary Button",
  size: 'medium',
  color: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  text: "Danger Button",
  size: 'medium',
  color: 'danger',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

