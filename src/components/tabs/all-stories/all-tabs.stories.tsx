import { Story, Meta } from '@storybook/react';

import { Tabs } from '../Tabs';
import { ButtonProps } from '../../../types';

export default {
  title: 'Mobalytics/Tabs/All Stories',
  component: Tabs,
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

const Template: Story<ButtonProps> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
};
