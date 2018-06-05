// const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.config.js');

// module.exports = {
// 	devtool: 'cheap-module-source-map',
// 	entry: {
// 		app: [
// 			path.join(__dirname, 'src/index.js')
// 		],
// 		vendor: ['react','react-router-dom','redux','react-dom','react-redux']
// 	},

// 	output: {
// 		path: path.join(__dirname,'./dist'),
// 		filename: '[name].[chunkhash].js',
// 		publicPath: '/'
// 	},

// 	module: {
// 		rules: [{
// 			test: /\.js$/,
// 			use: ['babel-loader'],
// 			include: path.join(__dirname, 'src')
// 		},{
// 			test: /\.css$/,
// 			// use: ExtractTextPlugin.extract({
// 			// 	fallback: "style-loader",
// 			// 	use: "css-loader"})
// 			loader:['style-loader', 'css-loader']
			
// 		},{
// 			test: /\.(png|jpg|gif)$/,
// 			use: [{
// 				loader: 'url-loader',
// 				options: {
// 					limit: 8192
// 				}
// 			}]
// 		}]
// 	},

// 	plugins: [
// 		new HtmlWebpackPlugin({
// 			filename: 'index.html',
// 			template: path.join(__dirname, 'src/index.html')
// 		}),
// 		new webpack.optimize.CommonsChunkPlugin({
// 			name: 'vendor',
// 			name: 'runtime'
// 		}),
// 		new UglifyJSPlugin(),
// 		new webpack.DefinePlugin({
// 			'process.env': {
// 				'NODE_ENV':JSON.stringify('production')
// 			}
// 		}),
// 		new webpack.HashedModuleIdsPlugin(),
// 		new CleanWebpackPlugin(['dist']),
// 		new ExtractTextPlugin({
// 			filename: '[name].[contenthash:5].css',
// 			allChunks: true
// 		})
// 	],

// 	resolve: {
// 		alias: {
//             pages: path.join(__dirname, 'src/pages'),
// 			component: path.join(__dirname, 'src/component'),
// 			actions: path.join(__dirname, 'src/redux/actions'),
// 			reducers: path.join(__dirname, 'src/redux/reducers'),
// 			router: path.join(__dirname, 'src/router/router')
//         }
// 	}
// }

const publicConfig = {
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			})
		}],
		loaders: [
			{
			  test: /\.jsx?$/,
			  exclude: /node_modules/,
			  loader: 'react-hot!babel'
			},
			{
			  test: /\.js$/,
			  exclude: /node_modules/,
			  loaders: ['babel-loader', 'eslint-loader']
			}
		  ]
	},
	plugins: [
		new CleanWebpackPlugin(['dist/*.*']),
		new UglifyJSPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSOM.stringify('production')
			}
		}),
		new ExtractTextPlugin({
			filename: '[name].[contenthash:5].css',
			allChunks: true
		})
	]
};

module.exports = merge(commonConfig, publicConfig);