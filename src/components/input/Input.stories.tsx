import { Story, Meta } from '@storybook/react';

import { Input } from './Input';
import { ButtonProps } from '../../types';

export default {
  title: 'Mobalytics/Input',
  component: Input,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
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

const Template: Story<ButtonProps> = (args) => <Input {...args} />;

export const Properties = Template.bind({});

Properties.args = {
  variant: 'primary',
};
