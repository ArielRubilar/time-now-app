import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from './Alert'
import { Icons } from '../Icons'

const icons =  { Logo: <Icons.Logo /> , CheckMark: <Icons.CheckMark />}

const meta = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    seeMore: {
        control: 'boolean'
    },
    icon: {
        mapping: icons,
        options: Object.keys(icons),
        control: {
            type: 'select',
            
        },

    }
  },
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint suscipit quo sequi minus quae porro vel architecto, possimus non perferendis blanditiis iure eum esse exercitationem! Repellat quae eaque aliquid.'
  }
 
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Transparent: Story = {

}



