var tpl = require('../../tpl/nav.html')
console.log(tpl)
module.exports = Backbone.View.extend({
    template:template.compile(tpl),
    initialize:function(){
        this.selectedIndex = 0
    },
    events:{
        'click a.weui-tabbar__item':'linkChanged'
    },
    linkChanged:function(event){
        this.selectedIndex = $(event.currentTarget).data('index')
        this.render()
    },
    render:function(){
        this.$el.html(this.template({selectedIndex:this.selectedIndex}))
        return this
    }
})
