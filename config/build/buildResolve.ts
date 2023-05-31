import { ResolveOptions } from "webpack"
import { BuildOptions } from "./types/config"

export const buildResolve = (options: BuildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js', '*'],
        preferAbsolute: true,
        modules: [options.path.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}