import type { Meta, StoryObj } from "@storybook/react"

import { AppLink, AppLinkTheme } from "./AppLink"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "shared/AppLink",
	component: AppLink,
	args: { to: "/" },
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
	args: {
		children: "Home",
		theme: AppLinkTheme.PRIMARY,
	},
}

export const Red: Story = {
	args: {
		children: "Home",
		theme: AppLinkTheme.RED,
	},
}

export const Secondary: Story = {
	args: {
		children: "Home",
		theme: AppLinkTheme.SECONDARY,
	},
}

export const PrimaryDark: Story = {
	args: {
		children: "Home",
		theme: AppLinkTheme.PRIMARY,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const RedDark: Story = {
	args: {
		children: "Home",
		theme: AppLinkTheme.RED,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const SecondaryDark: Story = {
	args: {
		children: "Home",
		theme: AppLinkTheme.SECONDARY,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}
