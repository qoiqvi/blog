import type { Meta, StoryObj } from "@storybook/react"

import { Navbar } from "./Navbar"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "widget/Navbar",
	component: Navbar,
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof Navbar>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
}

