/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react"

import { AppButton, ButtonSize, ButtonTheme } from "./AppButton"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

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

export const DisabledLight: Story = {
	args: {
		children: "Button onclick dima eshre",
		size: ButtonSize.M,
		disabled: true,
	},
}

export const DisabledDark: Story = {
	args: {
		children: "Button onclick dima eshre",
		size: ButtonSize.M,
		disabled: true,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}
