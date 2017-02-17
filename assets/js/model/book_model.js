//创建书籍模型
var BookModel = Backbone.Model.extend({
    idAttribute:'_id'
})

//创建书籍集合
var BookCollection = Backbone.Collection.extend({
    model:BookModel,
    url:'http://localhost:3000/api/v1/books/',
    getPageSize:function(params){
        $.getJSON(this.url+'get_page_count',params,function(res){
            console.log(res)
        })
    }
})
module.exports = {Model:BookModel,Collection:BookCollection}
