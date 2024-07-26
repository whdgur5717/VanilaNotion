import path from "path"
import { fileURLToPath } from "url"
import HtmlWebpackPlugin from "html-webpack-plugin"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config = {
  devServer: {
    historyApiFallback: true
  },
  mode: "development",
  entry: "./src/App.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              [
                "@babel/plugin-proposal-decorators",
                { decoratorsBeforeExport: true }
              ],
              ["@babel/plugin-proposal-class-properties", { loose: true }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: "none",
      template: "index.html"
    })
  ]
}

export default config
