module.exports = {
    entry:'./assets/app.js',
    output:{
        path:__dirname+'/build/',
        filename:'dist.js',
        publicPath:'/build/'
    },
    module:{
        rules:[
            {test:/\.html$/,use:'html-loader'},
            {test:/\.(jpg|png|gif)$/,use:'file-loader'}
        ]
    },
    devtool:'cheap-module-source-map'
}