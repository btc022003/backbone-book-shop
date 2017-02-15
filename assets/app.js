window.$ = require('jquery')
window._ = require('underscore')
window.Backbone = require('backbone')
window.template = require('./lib/template')
var Nav = require('./js/views/nav_view')
var nav = new Nav()
$('#nav').html(nav.render().$el)

var Router = Backbone.Router.extend({
    routes:{
        '':'homePage',
        'list/:type':'listPage'
    },
    homePage:function(){
        $('#app').html('homePage')
    },
    listPage:function(typt){
        $('#app').html('listPage')
    }
})
var router = new Router()
Backbone.history.start()
