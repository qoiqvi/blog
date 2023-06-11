import { type Preview } from "@storybook/react"
import { Theme } from "../../src/App/provider/ThemeProvider"
import { ThemeDecorator } from "../../src/shared/config/storybook/themeDecorator"
import { StyleDecorator } from "../../src/shared/config/storybook/styleDecorator"
import { RouterDecorator } from "../../src/shared/config/storybook/routerDecorator"

const preview: Preview = {
	decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview
