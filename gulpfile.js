var gulp = require('gulp')
var webpack = require('gulp-webpack')
var browserSync = require('browser-sync')
//创建webpack压缩任务
gulp.task('webpack',function(){
    gulp.src('./assets/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./'))
})
//创建默认任务 自动刷新浏览器
gulp.task('default',['webpack'],function(){
    browserSync.init({
        server:'./',
        port:3003
    })
    gulp.watch('./index.html',browserSync.reload)
    gulp.watch('./assets/**/*.*',['webpack'])
    gulp.watch('./assets/**/*.*',browserSync.reload)
})
