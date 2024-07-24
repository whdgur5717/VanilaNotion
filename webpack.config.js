import HtmlWebpackPlugin from "html-webpack-plugin"

const config = {
  entry: "./src/main.js",
  output: {
    clean: true
  },
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }] //스타일 로더는 link태그로 삽입해주는거
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  resolve: {
    fullySpecified: false,
    extensions: [".js"]
  }
}

export default config
