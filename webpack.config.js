// basick vars
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;

//module setting
let conf = {
	entry: './src/index.js',
	output: {
		filename: './js/index.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist'
	},
		performance: {
 		hints: false
	},
	devtool: "source-map",

	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,// расширение файла
				include: path.resolve(__dirname, 'src/js'),// что-то, что не должно обрабатываться
				use: {
					loader: 'babel-loader', // загрузчик или группа загрузчиков
				}
			},
			{
      test: /\.scss|sass|css$/,
      exclude: /node_modules/,
      use: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              isProduction ? require('cssnano') : () => {},
              require('autoprefixer')({
                browsers: ['last 2 versions']
              })
            ]
          }
        },
        'sass-loader'
      ]
    },

			{
				test: /\.(gif|png|jpe?g|svg)$/,
    			loader: 'file-loader',
    			options: {
            		name: '[name].[ext]',
            		outputPath: './images'
           		}
			},
		],
	},
	
	plugins: [
		new webpack.ProvidePlugin({
      		$: 'jquery',
      		jQuery: 'jquery',
    	  	'window.jQuery': 'jquery'
	    }),
		new MiniCssExtractPlugin({
      		filename: '[name].min.css',
      		allChunks: true,
    	}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/index.html',
			filename: 'index.html'
		}),

		new UglifyJsPlugin({
  			test: /\.js(\?.*)?$/i,
  			include: path.resolve(__dirname, 'src/js'),
  			sourceMap: true
		}),

		new CopyWebpackPlugin([{
        	from: './src/fonts',
        	to: './fonts'
     	},
      	{
        	from: './src/images',
        	to: './images'
      	},
    	]),

		new BrowserSyncPlugin({
      		host: 'localhost',
      		port: 3000,
      		files: ['./dist/*.html'],
      		server: { baseDir: ['dist'] }
   		 }),
	]
};
	module.exports = conf;