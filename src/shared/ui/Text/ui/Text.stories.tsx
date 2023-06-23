import type { Meta, StoryObj } from "@storybook/react"
import { Text } from "./Text"
import { ThemeDecorator } from "shared/config/storybook/themeDecorator"
import { Theme } from "App/provider/ThemeProvider"

const meta = {
	title: "shared/Text",
	component: Text,
	args: {},
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof Text>

export const LightTitle: Story = {
	args: {
		title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quod ipsum cum voluptatem beatae enim. Voluptatem, repudiandae molestias expedita sed exercitationem at molestiae saepe reprehenderit porro ducimus beatae alias voluptas.",
	},
}

export const DarkTitle: Story = {
	args: {
		title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quod ipsum cum voluptatem beatae enim. Voluptatem, repudiandae molestias expedita sed exercitationem at molestiae saepe reprehenderit porro ducimus beatae alias voluptas.",
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const LightText: Story = {
	args: {
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam nostrum architecto harum dolorem officia sint veniam eos maxime. At quos ab distinctio soluta voluptatibus perferendis quibusdam deleniti a. Dignissimos.",
	},
}

export const DarkText: Story = {
	args: {
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam nostrum architecto harum dolorem officia sint veniam eos maxime. At quos ab distinctio soluta voluptatibus perferendis quibusdam deleniti a. Dignissimos.",
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const LightTextNTitle: Story = {
	args: {
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam nostrum architecto harum dolorem officia sint veniam eos maxime. At quos ab distinctio soluta voluptatibus perferendis quibusdam deleniti a. Dignissimos.",
		title: "Title",
	},
}

export const DarkTextNTitle: Story = {
	args: {
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam nostrum architecto harum dolorem officia sint veniam eos maxime. At quos ab distinctio soluta voluptatibus perferendis quibusdam deleniti a. Dignissimos.",
		title: "Title",
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}
