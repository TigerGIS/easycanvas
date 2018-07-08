'use strict';

var webpack = require('webpack');

var path = require('path');
var glob = require('glob');
var base = require('./webpack.config.base.js');

var js = glob.sync('./src/plugins/mmd/*.js').reduce(function (prev, curr) {
    prev[curr.slice(6, -3).replace('plugins/mmd/', '')] = [curr];
    return prev;
}, {});

var config = {
    entry: js,
    resolve: base.resolve,
    output: {
        path: path.resolve('./build/mmd'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: base.loaders
    },
    babel: base.babel,
    plugins: [],
    node: base.node,
    debug: false,
    bail: true
};

config.plugins = config.plugins.concat([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
]);

config.output.filename = '[name].js';

config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
            pure_getters: true,
            screw_ie8: true,
            // unsafe: true,
            // unsafe_comps: true,
            warnings: false
        },
        output: {
            comments: false
        }
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
]);

module.exports = config;

