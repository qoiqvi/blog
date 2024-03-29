import type { Meta, StoryObj } from "@storybook/react"

import { CurrencySelect } from "./CurrencySelect"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "entities/CurrencySelect",
	component: CurrencySelect,
} satisfies Meta<typeof CurrencySelect>

export default meta
type Story = StoryObj<typeof CurrencySelect>

export const Light: Story = {
	args: {},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
