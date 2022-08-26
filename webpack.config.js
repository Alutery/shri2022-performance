import * as path from "path"
import * as webpack from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import StatoscopePlugin from "@statoscope/webpack-plugin"

import ModuleLogger from "./plugins/moduleLogger"

const whiteList = [
    ".gitignore",
    "node_modules",
    ".git",
    ".idea",
    "webpack.config.ts",
    "tsconfig.json",
    "stats.json",
    "statoscope.config.js",
    "package.json",
    "package-lock.json",
    ".nvmrc",
    ".prettierrc.yaml",
    "README.md",
    "moduleLogger.ts",
    "dist",
    "index.html",
    "unused.json"
]

const config: webpack.Configuration = {
    mode: "production",
    entry: {
        root: "./src/pages/root.tsx",
        root2: "./src/pages/root2.tsx"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ModuleLogger({ whiteList }),
        new StatoscopePlugin({
            saveStatsTo: "stats.json",
            saveOnlyStats: false,
            open: false
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        fallback: {
            buffer: require.resolve("buffer"),
            stream: false
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        "bn.js": "fake.js"
    }
}

export default config
