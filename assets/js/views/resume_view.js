var tpl = require('../../tpl/resume.html')
module.exports = Backbone.View.extend({
    initialize:function(){

    },
    template:template.compile(tpl),
    render:function(){
        this.$el.html(this.template())
        return this
    }
})
