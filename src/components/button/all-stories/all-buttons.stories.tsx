import { Story, Meta } from '@storybook/react';

import { Button } from '../Button';
import { ButtonProps } from '../../../types';

export default {
  title: 'Mobalytics/Button/All Stories',
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
      default: 'mobalytics-blue',
      values: [
        {
          name: 'mobalytics-blue',
          value: '#1b133d',
        },
        {
          name: 'mobalytics-particles',
          value: 'url(https://cdnportal.mobalytics.gg/production/2021/06/7c7db273-particles.svg)',
        },
      ],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Button',
};
