import type { Meta, StoryObj } from "@storybook/react"

import { Skeleton } from "./Skeleton"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "shared/Skeleton",
	component: Skeleton,
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof Skeleton>

export const Light: Story = {
	args: {
		border: "50%",
		height: 100,
		width: 100,
	},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
