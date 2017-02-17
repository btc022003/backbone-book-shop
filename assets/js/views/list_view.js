var Book = require('../model/book_model')//引入书籍model文件
var Model = Book.Model
var Collection = Book.Collection

var tpl = require('../../tpl/list.html') //视图模版

module.exports = Backbone.View.extend({
    initialize:function(type){
        var self = this
        this.pageIndex = 1 //设置当前页码
        this.type = type //设置当前分类数据
        this.books = new Collection() //设置书籍集合数据
        this.listenTo(this.books,'add',this.dataChangedHandle)//监听集合的add事件,在fetch之后触发
        this.books.getPageSize({type:this.type},function(pageData){
            self.pageCount = pageData.pageCount //总页数
            //remove:false 不删除集合中已经存在的数据
            // self.books.fetch({data:{type:self.type,page:self.pageIndex},remove:false})
            pageData.res.forEach(function(item){
                self.books.add(item)
            })
        })
    },
    template:template.compile(tpl),
    events:{
        'click .btn-more':'loadMoreData' //加载更多
    },
    render:function(){
        this.$el.html(this.template({data:this.books.toJSON()}))
        if(this.pageIndex == this.pageCount){
            this.$el.find('.btn-more').html('没有更多数据...')
        }
        return this
    },
    dataChangedHandle:function(model){
        this.render()
    },
    loadMoreData:function(){
        //this.books.add(new Model({title:"从你的全世界路过"}))
        this.pageIndex += 1 //页码加一        
        this.books.fetch({data:{type:this.type,page:this.pageIndex},remove:false})
    }
})
