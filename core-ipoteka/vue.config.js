
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('@vue/cli-service')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/root/':
        '/',
    transpileDependencies: [true],
    configureWebpack: {
        output: {
            libraryTarget: 'system',
            filename: 'js/app.js',
        }
    },
    devServer: {
        host: 'localhost',
    },
}
