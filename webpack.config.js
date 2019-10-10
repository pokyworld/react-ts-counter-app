const path = require('path');
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rules = [
    {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
    },
    {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
            },
            {
                loader: "sass-loader",
                options: {
                    sourceMap: true
                }
            }
        ]
    }
]

module.exports = {
    target: "web",
    mode: "development",
    entry: [
        "./src/index.tsx",
        "./styles/scss/main.scss",
        "./styles/css/app.css"
    ],
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/",
        filename: "scripts/[name].app.js",
        chunkFilename: "scripts/[name].app.js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "initial",
                },
            },
        },
    },
    module: { rules },
    resolve: {
        modules: ["src", "node_modules"],
        extensions: [".ts", ".tsx", ".jsx", ".js", ".scss"]
    },
    devServer: {
        https: true,
        host: "pokyworld.local",
        cert: fs.readFileSync('/Volumes/Transcend/Drive/Projects/Active/udemy/understanding-ts/ssl/pokyworld.local.crt'),
        key: fs.readFileSync('/Volumes/Transcend/Drive/Projects/Active/udemy/understanding-ts/ssl/pokyworld.local.key'),
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        compress: true,
        port: 8443
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].app.css"
        }),
    ]
};