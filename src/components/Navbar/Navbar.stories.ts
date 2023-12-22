import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    userLoggedIn: true,
  },
};

export const LoggedOut: Story = {
  args: {
    userLoggedIn: false,
  },
};
