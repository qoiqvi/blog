import webpack, { DefinePlugin, HotModuleReplacementPlugin } from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { type BuildOptions } from "./types/config"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
	const { isDev, path } = options
	const plugins = [
		new HtmlWebpackPlugin({
			template: path.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css",
		}),
		new DefinePlugin({
			__IS__DEV__: JSON.stringify(isDev),
		}),
	]
	if (isDev) {
		plugins.push(
			new HotModuleReplacementPlugin(),
			new BundleAnalyzerPlugin({
				openAnalyzer: false,
			})
		)
	}
	return plugins
}
