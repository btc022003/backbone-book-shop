//创建书籍模型
var BookModel = Backbone.Model.extend({
    idAttribute:'_id'
})

//创建书籍集合
var BookCollection = Backbone.Collection.extend({
    model:BookModel,
    url:'http://localhost:3000/api/v1/books/'
})
module.exports = {Model:BookModel,Collection:BookCollection}
