import type { Meta, StoryObj } from "@storybook/react"
import { ArticlePageTabs } from "./ArticlePageTabs"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"
import { StoreDecorator } from "shared/config/storybook/storeDecorator"

const meta = {
	title: "pages/ArticlesPage/ArticlePageTabs",
	component: ArticlePageTabs,
	decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticlePageTabs>

export default meta
type Story = StoryObj<typeof ArticlePageTabs>

export const Light: Story = {
	args: {},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
