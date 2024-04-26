const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    pluginOptions:{
      electronBuilder: {
        customFileProtocol: './',
        preload: 'src/preload.js'
      }
  }
})
