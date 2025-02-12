const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    //开启代理，方式1
   /*   devServer: {
      port: 9000,
      proxy: 'http://localhost:8000'
      }*/
    //开始代理，方式2
    devServer: {
        port: 9000,
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
            }
        }
    }
})
