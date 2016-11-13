const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const paths = ['/'];

const entry = PRODUCTION
	?	[
		'./src/root.prod.jsx'
	]
	:	[
		'./src/root.dev.jsx',
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080'
	];


const plugins = PRODUCTION
	? 	[
			new ExtractTextPlugin('bundle.css'),
			new StaticSiteGeneratorPlugin('main', paths, {
				// Properties here are merged into `locals`
				// passed to the exported render function
				greet: 'Hello'
			})
]
	: 	[
			new webpack.HotModuleReplacementPlugin()
		];

const cssSelectorName = '[name]__[local]___[hash:base64:5]';
const cssLoaderParts = [
	'css-loader?sourceMap&modules&importLoaders=1&localIdentName=' + cssSelectorName + ''
];

const cssLoader = PRODUCTION
	?	ExtractTextPlugin.extract({
			loader: cssLoaderParts.join('!')
		})
	: 	cssLoaderParts.join('!');

module.exports = {

	entry: entry,
	plugins: plugins,
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ['src', 'node_modules']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: PRODUCTION ? '/' : '/dist/',
		/* IMPORTANT!
		 * You must compile to UMD or CommonJS
		 * so it can be required in a Node context: */
		libraryTarget: 'umd'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['babel-loader'],
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loaders: cssLoader,
			exclude: /node_modules/
		}]
	}

};