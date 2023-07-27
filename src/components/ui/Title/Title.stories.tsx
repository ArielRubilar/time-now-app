import type { Meta, StoryObj } from '@storybook/react'
import { SectionTitle } from './Title'

const meta = {
  title: 'UI/SectionTitle',
  component: SectionTitle,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    as: { control: { type: 'select' } , options:['h1', 'h2', 'h3', 'h4', 'h5']},
    children: { control: 'text' }
  },
  args: {
    as: 'h1',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente inventore officiis quidem atque eum'
  }
} satisfies Meta<typeof SectionTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {

}
