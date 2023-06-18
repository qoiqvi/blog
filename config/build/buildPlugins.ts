import webpack, { DefinePlugin, HotModuleReplacementPlugin } from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { type BuildOptions } from "./types/config"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
	const { isDev, path, apiURL, project } = options
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
			_IS_DEV_: JSON.stringify(isDev),
			_API_URL_: JSON.stringify(apiURL),
			_PROJECT_: JSON.stringify(project),
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
