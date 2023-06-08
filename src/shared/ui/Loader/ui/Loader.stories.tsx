import type { Meta, StoryObj } from "@storybook/react"

import { Loader } from "./Loader"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "shared/Loader",
	component: Loader,
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof Loader>

export const LightLoader: Story = {
	args: {},
}

export const DarkLoader: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
