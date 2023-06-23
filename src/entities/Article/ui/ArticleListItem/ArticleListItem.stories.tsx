import type { Meta, StoryObj } from "@storybook/react"
import { ArticleListItem } from "./ArticleListItem"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"
import { ArticleView } from "entities/Article/model/types/article"

const meta = {
	title: "entities/ArticleListItem",
	component: ArticleListItem,
} satisfies Meta<typeof ArticleListItem>

export default meta
type Story = StoryObj<typeof ArticleListItem>

export const Light: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.LIGHT_GREEN)],
}

export const List: Story = {
	args: { view: ArticleView.LIST },
	decorators: [ThemeDecorator(Theme.LIGHT_GREEN)],
}
