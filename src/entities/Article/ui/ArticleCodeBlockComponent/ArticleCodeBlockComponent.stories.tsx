import type { Meta, StoryObj } from "@storybook/react"
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"
import { ArticleBlockType } from "entities/Article/model/types/article"

const meta = {
	title: "entities/ArticleCodeBlockComponent",
	component: ArticleCodeBlockComponent,
	args: {
		block: {
			id: "2",
			type: ArticleBlockType.CODE,
			code: `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		
	</body>
	</html>`,
		},
	},
} satisfies Meta<typeof ArticleCodeBlockComponent>

export default meta
type Story = StoryObj<typeof ArticleCodeBlockComponent>

export const Light: Story = {
	args: {},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const Pink: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.LIGHT_GREEN)],
}
