import type { Meta, StoryObj } from "@storybook/react"

import About from "./About"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "pages/About",
	component: About,
} satisfies Meta<typeof About>

export default meta
type Story = StoryObj<typeof About>

export const Light: Story = {
	args: {},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
