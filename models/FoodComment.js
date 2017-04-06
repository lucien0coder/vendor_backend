const base = require('./Base'),
    extend = base.extend,
    mongoose = base.mongoose,
    BaseSchema = base.Schema

const FoodCommentSchema = BaseSchema.extend({
    content:{ type:String, default:'' },//食评内容
    img:{ type:String, default:'' },//食评配图
    preview:{ type:String, default:'' },//食评贴效果
    shop:{ type:String, default:'' }//相应店铺
})

module.exports = {
    Model :  mongoose.model('FoodComment', FoodCommentSchema)
}