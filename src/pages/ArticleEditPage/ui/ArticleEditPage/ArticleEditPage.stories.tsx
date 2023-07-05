import type { Meta, StoryObj } from "@storybook/react"
import ArticleEditPage from "./ArticleEditPage"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "pages/ArticleEditPage",
	component: ArticleEditPage,
} satisfies Meta<typeof ArticleEditPage>

export default meta
type Story = StoryObj<typeof ArticleEditPage>

export const Light: Story = {
	args: {},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
