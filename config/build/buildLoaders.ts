import { type RuleSetRule } from "webpack"
import buildCssLoaders from "./loaders/buildCssLoaders"
import { buildBabelLoader } from "./loaders/buildBabelLoader"

export const buildLoaders = (isDev: boolean): RuleSetRule[] => {
	const tsLoaders = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	}

	const svgLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: ["file-loader"],
	}

	const babelLoader = buildBabelLoader(isDev)

	const cssLoaders = buildCssLoaders(isDev)

	return [fileLoader, cssLoaders, babelLoader, svgLoader, tsLoaders]
}
