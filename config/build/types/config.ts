export type buildMode = "production" | "development"

export interface BuildPath {
	entry: string
	build: string
	html: string
	src: string
	locales: string
	buildLocales: string
}

export interface BuildOptions {
	mode: buildMode
	path: BuildPath
	isDev: boolean
	port: number
	apiURL: string
	project: "storybook" | "frontend" | "jest"
}

export interface BuildEnv {
	mode: buildMode
	port: number
	url: string
}
