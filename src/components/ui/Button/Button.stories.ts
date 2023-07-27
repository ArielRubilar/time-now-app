import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    styleType: { control: { type: 'select' }, options: ['primary', 'secondary']  , defaultValue: 'primary'},
    children: {  control: 'text' , defaultValue: ''},
    className: { table: {
      disable: true,
    },}
  },
  args: {
    styleType: 'primary',
    children: 'Click on me!'
  }
 
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    styleType: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    styleType: 'secondary'
  }
}


