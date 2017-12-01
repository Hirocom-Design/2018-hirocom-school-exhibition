'use strict'

const webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
                //babelの使用
                //presetは.babelrcに記述
            }
        ]
    },
    entry: __dirname + '/src/jsx/app.jsx',
    //ファイルの読み込み先
    output: {
        path: __dirname + '/docs/app',
        //出力先
        filename: '[name].js'
        //ファイル名
    },
    resolve: {
        extensions: ['.js','.jsx']
    }
};
