import type { Meta, StoryObj } from "@storybook/react"
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "pages/ArticleDetailsPage/ArticleDetailsPageHeader",
	component: ArticleDetailsPageHeader,
} satisfies Meta<typeof ArticleDetailsPageHeader>

export default meta
type Story = StoryObj<typeof ArticleDetailsPageHeader>

export const Light: Story = {
	args: {},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
