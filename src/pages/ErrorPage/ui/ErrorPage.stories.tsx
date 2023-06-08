import type { Meta, StoryObj } from "@storybook/react"

import { ErrorPage } from "./ErrorPage"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "pages/ErrorPage",
	component: ErrorPage,
} satisfies Meta<typeof ErrorPage>

export default meta
type Story = StoryObj<typeof ErrorPage>

export const Light: Story = {
	args: {},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
