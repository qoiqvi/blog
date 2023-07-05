import type { Meta, StoryObj } from "@storybook/react"
import { ArticleDetailsRecomendations } from "./ArticleDetailsRecomendations"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "pages/ArticleDetailsPage/ArticleDetailsRecomendations",
	component: ArticleDetailsRecomendations,
} satisfies Meta<typeof ArticleDetailsRecomendations>

export default meta
type Story = StoryObj<typeof ArticleDetailsRecomendations>

export const Light: Story = {
	args: {},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
