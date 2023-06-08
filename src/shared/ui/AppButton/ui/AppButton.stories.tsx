import type { Meta, StoryObj } from "@storybook/react"

import { AppButton, ThemeButton } from "./AppButton"

const meta = {
	title: "shared/Button",
	component: AppButton,
} satisfies Meta<typeof AppButton>

export default meta
type Story = StoryObj<typeof AppButton>

export const Children: Story = {
	args: {
		children: "Button onclick dima eshre",
	},
}

export const ChildrenWithClearTheme: Story = {
	args: {
		children: "Button onclick dima eshre",
		theme: ThemeButton.CLEAR,
	},
}

export const ChildrenWithOutlinedTheme: Story = {
	args: {
		children: "Button onclick dima eshre",
		theme: ThemeButton.OUTLINED,
	},
}
