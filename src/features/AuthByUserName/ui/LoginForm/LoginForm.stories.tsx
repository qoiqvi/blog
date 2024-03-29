import type { Meta, StoryObj } from "@storybook/react"

import LoginForm from "./LoginForm"
import { Theme } from "App/provider/ThemeProvider"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { StoreDecorator } from "shared/config/storybook/storeDecorator"

const meta = {
	title: "features/LoginForm",
	component: LoginForm,
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof LoginForm>

export const Light: Story = {
	args: {},
	decorators: [StoreDecorator({ loginForm: { isLoading: true } })],
}

export const DarkWithError: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm: { username: "213", password: "21333" } })],
}
