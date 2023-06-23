import type { Meta, StoryObj } from "@storybook/react"
import { Sidebar } from "./Sidebar"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"
import { StoreDecorator } from "shared/config/storybook/storeDecorator"

const meta = {
	title: "widget/Sidebar",
	component: Sidebar,
	args: {},
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof Sidebar>

export const Light: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			user: { AuthData: {} },
		}),
	],
}

export const Dark: Story = {
	args: {},
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			user: { AuthData: {} },
		}),
	],
}

export const Pink: Story = {
	args: {},
	decorators: [
		ThemeDecorator(Theme.LIGHT_GREEN),
		StoreDecorator({
			user: {},
		}),
	],
}
