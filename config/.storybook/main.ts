import type { StorybookConfig } from "@storybook/react-webpack5"
import path from "path"
import { DefinePlugin, type RuleSetRule } from "webpack"
import type { Configuration, webpack } from "webpack"
import buildCssLoaders from "../build/loaders/buildCssLoaders"

const config: StorybookConfig = {
	stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	webpackFinal: async (config: Configuration) => {
		const src = path.resolve(__dirname, "..", "..", "src")
		config.resolve?.modules?.push(src)
		config.resolve?.extensions?.push("ts", "tsx")
		const fileLoaderRule: any = config.module?.rules?.find((rule: any) => rule.test && rule.test.test(".svg"))
		if (fileLoaderRule) fileLoaderRule.exclude = /\.svg$/
		config.module?.rules?.push({
			test: /\.svg$/,
			enforce: "pre",
			loader: require.resolve("@svgr/webpack"),
		})
		config.module?.rules?.push(buildCssLoaders(true))
		config.plugins?.push(
			new DefinePlugin({
				__IS__DEV__: true,
			})
		)
		return config
	},
}
export default config
