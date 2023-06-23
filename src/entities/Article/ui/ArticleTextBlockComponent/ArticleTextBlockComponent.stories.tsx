import type { Meta, StoryObj } from "@storybook/react"
import { ArticleTextBlockComponent } from "./ArticleTextBlockComponent"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"
import { ArticleBlockType } from "entities/Article/model/types/article"

const meta = {
	title: "entities/ArticleTextBlockComponent",
	component: ArticleTextBlockComponent,
	args: {
		block: {
			id: "1",
			type: ArticleBlockType.TEXT,
			title: "Title for this article",
			paragraphs: [
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est eos accusantium nostrum, nesciunt possimus harum fugiat aliquid cumque tempora quia, modi neque excepturi ad expedita, eveniet cupiditate repellendus hic! Voluptatem?",
			],
		},
	},
} satisfies Meta<typeof ArticleTextBlockComponent>

export default meta
type Story = StoryObj<typeof ArticleTextBlockComponent>

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
}
