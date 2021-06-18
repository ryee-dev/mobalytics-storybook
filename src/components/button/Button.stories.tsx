import { Story, Meta } from '@storybook/react';

import { Button } from './Button';
import { ButtonProps } from '../../types';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    backgrounds: {
      default: 'mobalytics',
      values: [
        {
          name: 'mobalytics',
          value: '#1b133d',
        },
      ],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  size: 'md',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  label: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  size: 'md',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Button',
};
