export type buildMode = 'production' | 'development'

export interface BuildPath {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildOptions {
  mode: buildMode
  path: BuildPath
  isDev: boolean
  port: number
}

export interface BuildEnv {
  mode: buildMode
  port: number
}