window.$ = require('jquery')
window._ = require('underscore')
window.Backbone = require('backbone')
window.template = require('./lib/template')
var Nav = require('./js/views/nav_view')//导航视图
var BookTypeView = require('./js/views/type_view')//分类视图
var BookListView = require('./js/views/list_view')//书籍列表书籍

var nav = new Nav() //导航视图展示
$('#nav').html(nav.render().$el)

var bookType = new BookTypeView()


var Router = Backbone.Router.extend({
    routes:{
        '':'homePage',
        'books':'booksType',
        'list/:type':'listPage'
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
    }
})
var router = new Router()
Backbone.history.start()
