const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist/',
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader','sass-loader']
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, '/dist/'),
		compress: true,
		port: 9000,
		stats: 'errors-only'
	},
	plugins: [
		new ExtractTextPlugin('app.css'),
		new HtmlWebpackPlugin({
			title: 'Webpack 101',
			minify: {
				collapseWhiteSpace: true
			}
		}),
		new HtmlWebpackPlugin({
			title: 'Contact Page',
			hash: true,
			filename: 'contact.html',
			template: './src/contact.html'
		})
	]
}
