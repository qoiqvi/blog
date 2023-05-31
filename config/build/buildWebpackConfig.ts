import { BuildOptions } from "./types/config";
import webpack from 'webpack'
import path from "path"
import { buildResolve } from './buildResolve'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { BuildPath } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const { mode, path, isDev } = options

    return {
        mode: mode,
        entry: path.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: path.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(isDev)
        },
        resolve: buildResolve(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}