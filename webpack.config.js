const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = env =>{
    return {
        entry: "./src/components/index.tsx",
        target: "web",
        mode: env.NODE_ENV,
        output: {
            path: path.resolve("build"),
            filename: "bundle.js",
        },
        resolve: {
            extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        },
        module: {
            rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.css$/,
                loader: "css-loader",
            },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
            template: path.resolve( "src", "components", "index.html"),
            }),
            
        ],
    }
  
};