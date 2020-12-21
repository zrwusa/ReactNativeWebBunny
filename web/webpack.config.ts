import path from "path";
import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import {name as appName} from "../app.json";
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';

function configFactory(): webpack.Configuration {
    const ext = {
        ts: /\.(tsx|ts|jsx|js|mjs)$/,
        image: /\.(png|svg|jpg|jpeg|gif)$/i,
    };
    const buildPath = path.join(__dirname,"../public");
    const devMode = process.env.NODE_ENV === "development";
    const prodMode = process.env.NODE_ENV === "production";

    return {
        entry: "./src/index.ts",
        mode: devMode ? "development" : prodMode ? "production" : "none",
        devtool: devMode ? "source-map" : false,
        devServer: devMode ? {
            contentBase: path.join(__dirname, buildPath),
            compress: false,
            port: 3006,
            hot: true,
            open: true, // "Google Chrome"
            historyApiFallback: true,
            proxy: {  // Front-end and back-end separation
                "/api": {
                    target: "http://localhost:8000",
                    pathRewrite: {"^/api": ""}
                }
            }
        } : {},
        module: {
            rules: [
                {
                    test: ext.ts,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            sourceMap: devMode,
                            plugins: devMode ? ['react-refresh/babel'] : [],
                        },
                    },
                },
                // {
                //   test: ext.ts,
                //   exclude: /node_modules/ ,
                //   use:{
                //     loader: "ts-loader",
                //     options:{
                //       compilerOptions: {
                //         "sourceMap": devMode,
                //       }
                //     }
                //   },
                // },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js",],
            alias: {
                "react-native$": "react-native-web",
                "react-router-native": "react-router-dom",
            },
        },
        output: {
            path: path.resolve(__dirname, buildPath),
            filename: devMode ? "[name].js" : "[name].[chunkhash].js",
            publicPath: "/"
        },
        optimization: {
            minimize: prodMode,
            minimizer: [
                `...`, // For webpack@5 extend existing minimizers
            ],
            runtimeChunk: devMode ? "single" : undefined,
            splitChunks: {
                chunks: "all",
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: devMode ?
                            (module: any) => {
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];                            // get the name node_modules/packageName
                                return `npm.${packageName.replace('@', '')}`;                            // npm package names are URL-safe, but some servers don't like @ symbols
                            } :
                            "vendor"
                    },
                },
            }
        },
        plugins: [
            devMode ? new ReactRefreshPlugin() : Function(),
            prodMode ? new CleanWebpackPlugin() : Function(),
            new HtmlWebpackPlugin({
                title: appName,
                filename: "index.html",
                template: "./src/index.html"
            }),
            new ForkTsCheckerWebpackPlugin({
                async: false,
                eslint: {
                    files: "./src/**/*.{ts,tsx}",
                },
            }),
        ],
        target: devMode ? "web" : "browserslist", //default being "browserlist" since 5.0.0-rc.1,Set to "web" when developing with react-hot-loader
    };
}

export default configFactory;

