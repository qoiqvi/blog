/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "./Avatar"
import Pokemon from "./images.jpg"

const meta = {
	title: "shared/Avatar",
	component: Avatar,
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof Avatar>

export const Image: Story = {
	args: {
		size: 150,
		src: Pokemon,
	},
}

export const Small: Story = {
	args: {
		size: 50,
		src: Pokemon,
	},
}
