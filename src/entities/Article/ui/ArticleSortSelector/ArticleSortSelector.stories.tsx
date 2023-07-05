import type { Meta, StoryObj } from "@storybook/react"
import { ArticleSortSelector } from "./ArticleSortSelector"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "entities/article/ArticleSortSelector",
	component: ArticleSortSelector,
} satisfies Meta<typeof ArticleSortSelector>

export default meta
type Story = StoryObj<typeof ArticleSortSelector>

export const Light: Story = {
	args: {},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
