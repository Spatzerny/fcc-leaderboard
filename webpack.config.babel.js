import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

const config = {
	entry: [
		path.resolve(__dirname, 'app/index.jsx')
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{test: [/\.js$/, /\.jsx$/], exclude: /node_modules/, loader: 'babel-loader'},
			{test: [/\.sass$/, /\.scss$/], loaders: ['style-loader', 'css-loader', 'sass-loader']}
		]
	},
  plugins: [HTMLWebpackPluginConfig]
}

export default config