import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from 'axent-ui';

const meta = {
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'radio',
      options: ['left', 'center', 'right', 'justify'],
    },
    component: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    children: {
      type: 'string',
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingStory: Story = {
  args: {
    component: 'h1',
    align: 'left',
    children: 'Axent Design System',
  },
};
