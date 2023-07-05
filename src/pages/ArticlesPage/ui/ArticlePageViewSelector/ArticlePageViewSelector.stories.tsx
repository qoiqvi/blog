import type { Meta, StoryObj } from "@storybook/react"
import { ArticlePageViewSelector } from "./ArticlePageViewSelector"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "pages/ArticlePageViewSelector",
	component: ArticlePageViewSelector,
} satisfies Meta<typeof ArticlePageViewSelector>

export default meta
type Story = StoryObj<typeof ArticlePageViewSelector>

export const Light: Story = {
	args: {},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
