var tpl = require('../../tpl/book_type.html')
module.exports = Backbone.View.extend({
    initialize:function(){
        this.typeList = [
            {id:'ertong',name:'儿童',img:'http://img3x8.ddimg.cn/97/8/23812468-1_l_1.jpg',description:'当当网童书热销榜'},
            {id:'jingji',name:'经济',img:'http://img3x8.ddimg.cn/97/8/23812468-1_l_1.jpg',description:'当当网历史书热销榜'},
            {id:'dongman',name:'动漫',img:'http://img3x8.ddimg.cn/97/8/23812468-1_l_1.jpg',description:'当当网热销榜'},
            {id:'qingchunwenxue',name:'青春文学',img:'http://img3x8.ddimg.cn/97/8/23812468-1_l_1.jpg',description:'当当网热销榜'}
        ]
    },
    template:template.compile(tpl),
    render:function(){
        this.$el.html(this.template({bookTypes:this.typeList}))
        return this
    }
})
