const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const ImageminPlugin = require('imagemin-webpack-plugin').default

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const DATA_YOUTUBE = require('./temp/yt-views.json');

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
			}),
      new ImageminPlugin({
        pngquant: {
          quality: '95-100'
        }
      })
]
	: 	[
			new webpack.HotModuleReplacementPlugin()
		];

plugins.push(
	new webpack.DefinePlugin({
		DATA: {
			youTubeViews: DATA_YOUTUBE
		}
	})
);

plugins.push(

);

const cssLoader = PRODUCTION
	?	ExtractTextPlugin.extract({
			loader: 'css-loader?minimize&sourceMap&modules&importLoaders=1&localIdentName=[hash:base64:7]!postcss-loader'
		})
	: 	'style!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader';


// const cssLoader = 'style!' + cssLoaderParts.join('!');

console.log(path.resolve(__dirname, 'src/shared'));

module.exports = {

	entry: entry,
	plugins: plugins,
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ['src', 'node_modules', 'src/components'],
		alias: {
			// shared: path.resolve(__dirname, 'src/shared')
		}
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
		}, {
			test: /\.json$/,
			loaders: ['json-loader'],
			exclude: /node_modules/
		}, {
			test: /\.(jpg|png)$/,
			loaders: ['file-loader'],
			exclude: /node_modules/
		}, {
			test: /\.(eot|ttf|woff|woff2)$/,
			loader: 'file?name=[name].[ext]'
		},
			{ test: /\.svg$/, loader: 'babel?presets[]=es2015,presets[]=react!svg-react' }
		, {
			test: /\.txt$/,
			loaders: ['raw-loader'],
			exclude: /node_modules/
			},
		]
	}
};