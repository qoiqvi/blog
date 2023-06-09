/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react"

import { AppButton, ButtonSize, ButtonTheme } from "./AppButton"

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
		theme: ButtonTheme.CLEAR,
	},
}

export const ChildrenWithOutlinedTheme: Story = {
	args: {
		children: "Button onclick dima eshre",
		theme: ButtonTheme.OUTLINED,
	},
}

export const ButtonSizeM: Story = {
	args: {
		children: "Button onclick dima eshre",
		theme: ButtonTheme.OUTLINED,
		size: ButtonSize.M,
	},
}

export const ButtonSizeL: Story = {
	args: {
		children: "Button onclick dima eshre",
		theme: ButtonTheme.OUTLINED,
		size: ButtonSize.L,
	},
}

export const ButtonSizeXL: Story = {
	args: {
		children: "Button onclick dima eshre",
		theme: ButtonTheme.OUTLINED,
		size: ButtonSize.XL,
	},
}
