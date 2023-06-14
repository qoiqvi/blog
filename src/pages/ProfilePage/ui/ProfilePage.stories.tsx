import type { Meta, StoryObj } from "@storybook/react"

import ProfilePage from "./ProfilePage"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"
import { StoreDecorator } from "shared/config/storybook/storeDecorator"

const meta = {
	title: "pages/ProfilePage",
	component: ProfilePage,
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {
	args: {},
	decorators: [StoreDecorator({})],
}

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
}
