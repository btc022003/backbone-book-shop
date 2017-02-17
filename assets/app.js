window.$ = require('jquery')//jquery
window._ = require('underscore')//underscore
window.Backbone = require('backbone')//backcone
window.template = require('./lib/template')//art-template模块
var Nav = require('./js/views/nav_view')//导航视图
var BookTypeView = require('./js/views/type_view')//分类视图
var BookListView = require('./js/views/list_view')//书籍列表书籍
var ResumeView = require('./js/views/resume_view')//个人简历页面
var nav = new Nav() //导航视图展示
$('#nav').html(nav.render().$el)

var bookType = new BookTypeView()


var Router = Backbone.Router.extend({
    routes:{
        '':'homePage',
        'books':'booksType',
        'list/:type':'listPage',
        'blog':'resumePage',
        'about_me':'mePage'
    },
    booksType:function(){
        $('#app').html(bookType.render().$el)
    },
    homePage:function(){
        $('#app').html('homePage')
    },
    listPage:function(type){
        // $('#app').html('listPage')
        var list = new BookListView(type)
        $('#app').html(list.render().$el)
    },
    resumePage:function(){
        var resume = new ResumeView()
        $('#app').html(resume.render().$el)
    },
    mePage:function(){
        $('#app').html('<h1>关于我</h1>')
    }
})
var router = new Router()
Backbone.history.start()
