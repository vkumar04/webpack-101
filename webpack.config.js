const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist/',
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack 101',
			minify: {
				collapseWhiteSpace: true
			},
			hash: true,
			template: './src/index.ejs'
		})
	]
}
