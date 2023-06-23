import type { Meta, StoryObj } from "@storybook/react"
import { CommentCard } from "./CommentCard"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "entities/CommentCard",
	component: CommentCard,
	args: {
		comment: {
			id: "1",
			text: "some comment",
			user: {
				id: "1",
				username: "admin",
				avatar: "https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png",
			},
		},
	},
} satisfies Meta<typeof CommentCard>

export default meta
type Story = StoryObj<typeof CommentCard>

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
