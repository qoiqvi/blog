/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "./Input"
import { Theme } from "App/provider/ThemeProvider"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"

const meta = {
	title: "shared/Input",
	component: Input,
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const InputLight: Story = {
	args: {
		autofocus: true,
		placeholder: "Your placeholder",
	},
}

export const InputDark: Story = {
	args: {
		autofocus: true,
		placeholder: "Your placeholder",
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}
