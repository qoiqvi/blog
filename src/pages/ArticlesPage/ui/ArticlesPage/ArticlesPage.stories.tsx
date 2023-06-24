import type { Meta, StoryObj } from "@storybook/react"
import ArticlesPage from "./ArticlesPage"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "pages/ArticlesPage",
	component: ArticlesPage,
} satisfies Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof ArticlesPage>

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const Pink: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.LIGHT_GREEN)],
}

export const Light: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.LIGHT_GREEN)],
}
