import type { Meta, StoryObj } from '@storybook/react';
import PropertyCard from './PropertyCard';

const meta = {
  title: 'Components/PropertyCard',
  component: PropertyCard,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof PropertyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    title: 'Proprty 1',
    description: 'This is a description of a property. This property is very nice and has a lot of features.',
    images: [
      {
        URL: 'https://picsum.photos/seed/picsum/200/300',
        description: 'Image 1',
      },
      {
        URL: 'https://picsum.photos/seed/picsum/200/300',
        description: 'Image 2',
      },
    ],
  },
};
