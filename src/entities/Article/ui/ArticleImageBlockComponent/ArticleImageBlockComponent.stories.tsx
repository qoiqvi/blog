import type { Meta, StoryObj } from "@storybook/react"
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"
import { ArticleBlockType } from "entities/Article/model/types/article"

const meta = {
	title: "entities/ArticleImageBlockComponent",
	component: ArticleImageBlockComponent,
	args: {
		block: {
			id: "1",
			title: "title",
			type: ArticleBlockType.IMAGE,
			src: "https://sun9-79.userapi.com/impg/vdX18aNBh41pqcVeOuJG3iLqj4ZesFVJE5-2YA/uwxuyBIlsUM.jpg?size=1104x1472&quality=96&sign=d53ce68ddcef63e718d9b1c46add46b2&type=album",
		},
	},
} satisfies Meta<typeof ArticleImageBlockComponent>

export default meta
type Story = StoryObj<typeof ArticleImageBlockComponent>

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
	decorators: [ThemeDecorator(Theme.LIGHT)],
}
