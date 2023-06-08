import { type RuleSetRule } from "webpack"
import buildCssLoaders from "./loaders/buildCssLoaders"

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

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env"],
				plugins: [
					[
						"i18next-extract",
						{
							locales: ["ru", "en"],
							keyAsDefaultValue: true,
						},
					],
				],
			},
		},
	}

	const cssLoaders = buildCssLoaders(isDev)

	return [fileLoader, cssLoaders, babelLoader, svgLoader, tsLoaders]
}
