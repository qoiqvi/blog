import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./Card"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "shared/Card",
	component: Card,
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const Image: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const Small: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.LIGHT_GREEN)],
}
