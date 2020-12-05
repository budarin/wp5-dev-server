const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        client: [path.resolve('./src/index.js')],
    },
    output: {
        publicPath: '/assets/',
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve('./dist'),
        hotUpdateChunkFilename: '[id].[fullhash].hot-update.js',
    },
    devServer: {
        hot: true,
        open: false,
        port: 3000,
        overlay: true,
        compress: true,
        // host: 'localhost',
        publicPath: '/assets/',
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        proxy: {
            '*': `http://localhost:3005`,
        },
        writeToDisk: true,
    },
};
