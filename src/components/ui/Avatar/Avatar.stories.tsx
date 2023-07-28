import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

import Img from './../../../../public/assets/UA1.png'

const meta = {
    title: 'UI/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered'
      },
    tags: ['autodocs'],
    args: {
        src: Img.src,
        alt: 'text'
    }
} satisfies  Meta<typeof Avatar>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {}