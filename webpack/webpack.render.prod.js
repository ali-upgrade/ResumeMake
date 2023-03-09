const webpackMerge = require('webpack-merge');
const renderBaseConfig = require('./webpack.render.base.js');

const prodConfig = {
  mode: 'production',
};

module.exports = webpackMerge.merge(renderBaseConfig, prodConfig);
