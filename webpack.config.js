const HtmlWebpackPlugin = require('html-webpack-plugin')
//This plugin is convenient to use for the production build of the application
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');

module.exports = (env = {}) => {

	const {mode = 'development'} = env
	console.log(mode);
	const isProd = mode === 'production'
	const isDev = mode === 'development'

	const getStyleLoaders = () => {
		return [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
	}

	const getPlugins = () => {
		let plugins = [
			new HtmlWebpackPlugin({
				title: 'Understanding Typescript',
				buildTime: new Date().toDateString(),
				template: "public/index.html"
			})
		]
		if (isProd) {
			plugins.push(new MiniCssExtractPlugin({
					filename: 'main-[hash:8].css'
				})
			);
		}
		return plugins
	}

	return {
		//alternatively mode: "production"
		mode: isProd ? "production" : isDev && 'development',
		entry: './src/index.ts',
		devtool: 'inline-source-map',
		output: {
			filename: isProd ? 'main-[hash:8].js': undefined,
			path: path.resolve(__dirname, 'dist'),
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.css$/,
					use: getStyleLoaders()
				}, {
					test: /\.js$/, //Adding exclusion
					exclude: /node_modules/,
					use: [{
						loader: 'babel-loader'
					}]
				}, //loading images
				{
					test: /\.(jpg|img|jpeg|png|ico)$/, use: [{
						loader: "file-loader", options: {
							//All files with the extension .jpg will be moved to the images folder
							outputPath: 'images', //These files will be named according to the following scheme
							name: '[name]-[sha1:hash:7].[ext]'
						}
					}]
				}, //loading fonts
				{
					test: /\.(ttf|otf|eot|woff|woff2)$/, use: [{
						loader: "file-loader", options: {
							//All files with the extension .jpg will be moved to the images folder
							outputPath: 'fonts', //These files will be named according to the following scheme
							name: '[name].[ext]'
						}
					}]
				}]
		},
		plugins: getPlugins(),
		devServer: {
			//	Here, we can modify the webpack-dev-server configuration.
			open: true
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
	}
}