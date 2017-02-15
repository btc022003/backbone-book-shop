window.$ = require('jquery')
window._ = require('underscore')
window.Backbone = require('backbone')
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
