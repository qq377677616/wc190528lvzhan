
// vue.config.js
const webpack = require('webpack')
module.exports = {
    publicPath: '/m',
    configureWebpack: {

           plugins: [
        
              new webpack.ProvidePlugin({
        
                $:"jquery",
        
                jQuery:"jquery",
        
                "windows.jQuery":"jquery"
        
              })
        
            ]
        
        }
}