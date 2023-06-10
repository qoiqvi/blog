/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from "@storybook/react"

import { LoginForm } from "./LoginForm"
import { Theme } from "App/provider/ThemeProvider"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"

const meta = {
	title: "features/LoginForm",
	component: LoginForm,
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof LoginForm>

export const Light: Story = {
	args: {},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
