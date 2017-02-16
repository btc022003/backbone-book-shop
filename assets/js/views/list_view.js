var Book = require('../model//book_model')
var Model = Book.Model
var Collection = Book.Collection

var tpl = require('../../tpl/list.html') //视图模版

module.exports = Backbone.View.extend({
	initialize:function(type){
		this.books = new Collection()
		this.listenTo(this.books,'add',this.dataChangedHandle)//监听集合的add事件,在fetch之后触发
		this.books.fetch({data:{type:type}})
	},
	template:template.compile(tpl),
	render:function(){
		this.$el.html(this.template({data:this.books.toJSON()}))
		return this
	},
	dataChangedHandle:function(){
		this.render()
	}
})