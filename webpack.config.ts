import type webpack from "webpack"
import { buildWebpackConfig } from "./config/build/buildWebpackConfig"
import { type BuildEnv, type BuildPath } from "./config/build/types/config"
import path from "path"

export default (env: BuildEnv) => {
	const paths: BuildPath = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		build: path.resolve(__dirname, "build"),
		html: path.resolve(__dirname, "public", "index.html"),
		src: path.resolve(__dirname, "src"),
	}

	const mode = env.mode || "development"
	const isDev = mode === "development"
	const PORT = env.port || 3000
	const apiURL = env.url || "http://localhost:8000"

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		path: paths,
		isDev,
		port: PORT,
		apiURL,
	})
	return config
}
