import type { Meta, StoryObj } from "@storybook/react"

import { Modal } from "./Modal"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "widget/Modal",
	component: Modal,
	args: {
		children:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita beatae omnis laudantium dicta temporibus ea iusto! Dolores iusto alias totam, nihil corrupti sunt porro hic! Unde necessitatibus ducimus totam eum?",
		isOpen: true,
	},
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const Light: Story = {
	args: {},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
