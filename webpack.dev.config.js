const path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');
const merge = require('webpack-merge');

const devConfig = {
	devtool: 'inline-source-map',
	entry:{
		app: [
			'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
        // vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
	},

	output: {
		// path: path.join(__dirname, './dist'),
		// filename: 'bundle.js',
		filename: '[name].[hash].js'
		// chunkFilename: '[name].[chunkhash].js'
	},

	module: {
		rules:[{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},
	devServer: {
	// 	port: 8080,//端口
		historyApiFallback:true,//
		// host:'0.0.0.0',//访问路径
		contentBase: path.join(__dirname, './dist')//url目录
	}

	// resolve: {
	// 	alias: {
	// 		pages: path.join(__dirname, 'src/pages'),
	// 		component: path.join(__dirname, 'src/component'),
	// 		actions: path.join(__dirname, 'src/redux/actions'),
	// 		reducers: path.join(__dirname, 'src/redux/reducers'),
	// 		router: path.join(__dirname, 'src/router/router')
	// 	}
	// },

	
	// plugins: [
	// 	new HtmlWebpackPlugin({
	// 		filename: 'index.html',
	// 		template: path.join(__dirname, 'src/index.html')
	// 	}),
	// 	new webpack.optimize.CommonsChunkPlugin({
	// 		name: 'vendor'
	// 	})
	// ]	
};

module.exports = merge({
	customizeArray(a, b, key) {
		if (key === 'entry.app')
			return b;
		return undefined;
	}
})(commonConfig, devConfig);

/*console.log("1.",path);
console.log("2.",path.join(__dirname, 'src'));
console.log("3.",path.join("/", 'src'));*/