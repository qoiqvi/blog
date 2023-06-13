import type { Meta, StoryObj } from "@storybook/react"

import { Navbar } from "./Navbar"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"
import { StoreDecorator } from "shared/config/storybook/storeDecorator"

const meta = {
	title: "widget/Navbar",
	component: Navbar,
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof Navbar>

export const Light: Story = {
	args: {},
	decorators: [StoreDecorator({ user: { AuthData: { id: "2", username: "123" } } })],
}

export const Dark: Story = {
	args: {},
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			user: {
				AuthData: {
					id: "1",
					username: "admin",
				},
			},
		}),
	],
}
