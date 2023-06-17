import type { Meta, StoryObj } from "@storybook/react"

import { CountrySelect } from "./CountrySelect"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "entities/CountrySelect",
	component: CountrySelect,
} satisfies Meta<typeof CountrySelect>

export default meta
type Story = StoryObj<typeof CountrySelect>

export const Light: Story = {
	args: {},
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
