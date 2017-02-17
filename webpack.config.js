module.exports = {
    entry:'./assets/app.js',
    output:{
        path:__dirname+'/build/',
        filename:'dist.js',
        publicPath:'/build/' //指定开发服务器启动时监测的路径
    },
    module:{
        rules:[
            {test:/\.html$/,use:'html-loader'},
            {test:/\.(jpg|png|gif)$/,use:'file-loader'}
        ]
    },
    devtool:'cheap-module-source-map'//生成js.map文件
}