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
        font: /\.(woff|woff2|eot|ttf)$/
    };
    const baseDir = path.resolve(__dirname, '../');
    const buildPath = path.join(baseDir, "public");
    const isDev = process.env.NODE_ENV === "development";
    const isProd = process.env.NODE_ENV === "production";

    return {
        entry: path.resolve(baseDir, "src/index.ts"),
        mode: isDev ? "development" : isProd ? "production" : "none",
        devtool: isDev ? "source-map" : false,
        devServer: isDev ? {
            // contentBase: path.join(__dirname, buildPath),
            compress: false,
            port: 3006,
            hot: true,
            open: true,
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
                    include: [
                        // path.resolve(baseDir, "index.js"),
                        path.resolve(baseDir, "src"),
                        path.resolve(baseDir, "node_modules/react-native-uncompiled"),
                        path.resolve(baseDir, "node_modules/react-native-elements"),
                        path.resolve(baseDir, "node_modules/react-router-native"),
                        path.resolve(baseDir, "node_modules/react-native-vector-icons"),
                        path.resolve(baseDir, "node_modules/react-native-ratings"),
                    ],
                    use: {
                        loader: "babel-loader",
                        options: {
                            sourceMap: isDev,
                            plugins: isDev ? ["react-refresh/babel"] : [],
                        },
                    },
                },
                {
                    test: ext.font,
                    loader: "file-loader",
                },
                {
                    test: ext.image,
                    loader: "file-loader",
                }
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js",],
            alias: {
                "react-native$": "react-native-web",
            },
        },
        output: {
            path: buildPath,
            filename: isDev ? "[name].js" : "[name].[chunkhash].js",
            publicPath: "/",
        },
        optimization: {
            minimize: isProd,
            minimizer: [
                `...`, // For webpack@5 extend existing minimizers
            ],
            runtimeChunk: isDev ? "single" : false,
            splitChunks: {
                chunks: "all",
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: isDev ?
                            (module: any) => {
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]; // get the name node_modules/packageName
                                return `npm.${packageName.replace('@', '')}`;                                        // npm package names are URL-safe, but some servers don't like @ symbols
                            } :
                            "vendor",
                    },
                },
            }
        },
        plugins: [
            isDev ? new ReactRefreshPlugin() : Function(),
            isProd ? new CleanWebpackPlugin() : Function(),
            new HtmlWebpackPlugin({
                title: appName,
                filename: "index.html",
                template: "src/index.html",
                showErrors: isDev,
                minify: isProd,
                inject:true
            }),
            new ForkTsCheckerWebpackPlugin({
                async: false,
                eslint: {
                    files: "./src/**/*.{ts,tsx}",
                },
            }),
        ],
        target: isDev ? "web" : "browserslist", //default being "browserlist" since 5.0.0-rc.1,Set to "web" when developing with react-hot-loader
    };
}

export default configFactory;

