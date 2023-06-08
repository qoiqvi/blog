import type { Meta, StoryObj } from "@storybook/react"

import { PageError } from "./PageError"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "widget/PageError",
	component: PageError,
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof PageError>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
}

