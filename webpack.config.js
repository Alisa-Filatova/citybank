var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var NODE_ENV = process.env.NODE_ENV;

module.exports = {
    context: __dirname,

    entry: {
        index: './js/index.js',
    },

    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: 'js/[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: `css-loader?${NODE_ENV === 'production' ? 'minimize' : ''}!less-loader`,
                }),
            }, {
                test: /\.(ttf|eot|woff2?)\??.*$/,
                loader: 'file-loader?name=fonts/[hash].[ext]',
            }, {
                test: /\.(jpe?g|png|gif)\??.*$/,
                loader: 'file-loader?name=img/[hash].[ext]',
            },
        ],
    },

    plugins: [
        new ExtractTextPlugin('css/[name].css'),
    ],
};

if (NODE_ENV === 'production') {
    var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true,
        },
    });

    module.exports.plugins.push(uglifyJsPlugin);
}
