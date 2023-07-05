import type { Meta, StoryObj } from "@storybook/react"
import { ArticlePageFilters } from "./ArticlePageFilters"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "pages/ArticlePageFilters",
	component: ArticlePageFilters,
} satisfies Meta<typeof ArticlePageFilters>

export default meta
type Story = StoryObj<typeof ArticlePageFilters>

export const Light: Story = {
	args: {},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
