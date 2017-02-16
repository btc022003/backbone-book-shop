var BookModel = Backbone.Model.extend({})

var BookCollection = Backbone.Collection.extend({
    model:BookModel,
    url:'http://localhost:3000/api/v1/books/'
})
module.exports = {Model:BookModel,Collection:BookCollection}
