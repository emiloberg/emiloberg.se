var webpack = require('webpack');
var path = require('path');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {

	entry: './src-browser/browser-index.js',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress : {
				screw_ie8 : true
			},
			mangle : {
				screw_ie8 : true
			}
		})
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ['src-browser', 'node_modules'],
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'browser.[hash:8].js',
		publicPath: '/'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['babel-loader'],
			exclude: /node_modules/
		}]
	}
};