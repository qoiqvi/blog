import { type BuildOptions } from "./types/config"
import type webpack from "webpack"
import { buildResolve } from "./buildResolve"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"

import { buildDevServer } from "./buildDevServer"

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
	const { mode, path, isDev } = options

	return {
		mode,
		entry: path.entry,
		output: {
			filename: "[name].[contenthash].js",
			path: path.build,
			clean: true,
			publicPath: "/",
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(isDev),
		},
		resolve: buildResolve(options),
		devtool: isDev ? "inline-source-map" : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}
