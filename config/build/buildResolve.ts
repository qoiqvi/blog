import { type ResolveOptions } from 'webpack'
import { type BuildOptions } from './types/config'

export const buildResolve = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js', '*'],
    preferAbsolute: true,
    modules: [options.path.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}
