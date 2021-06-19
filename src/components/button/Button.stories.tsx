import { Story, Meta } from '@storybook/react';

import { Button } from './Button';
import { ButtonProps } from '../../types';

export default {
  title: 'Mobalytics/Button',
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
    labelVisible: {
      control: { type: 'checkbox' },
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

export const Properties = Template.bind({});

Properties.args = {
  variant: 'primary',
  size: 'md',
  label: 'Button',
};
