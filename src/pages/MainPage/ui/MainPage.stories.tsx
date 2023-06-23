import type { Meta, StoryObj } from "@storybook/react"

import MainPage from "./MainPage"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"
import { StoreDecorator } from "shared/config/storybook/storeDecorator"

const meta = {
	title: "pages/MainPage",
	component: MainPage,
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof MainPage>

export const Light: Story = {
	args: {},
	decorators: [StoreDecorator({})],
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
}
