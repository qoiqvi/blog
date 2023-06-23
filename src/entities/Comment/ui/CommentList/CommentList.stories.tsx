import type { Meta, StoryObj } from "@storybook/react"
import { CommentList } from "./CommentList"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "entities/CommentList",
	component: CommentList,
	args: {
		comments: [
			{
				id: "1",
				text: "some comment",
				user: {
					id: "1",
					username: "admin",
					avatar: "https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png",
				},
			},
		],
	},
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof CommentList>

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

export const Loading: Story = {
	args: { isLoading: true },
}
