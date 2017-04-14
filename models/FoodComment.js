const base = require('./Base'),
    extend = base.extend,
    mongoose = base.mongoose,
    BaseSchema = base.Schema

const FoodCommentSchema = BaseSchema.extend({
    content:{ type:String, default:'非常不错！' },//食评内容
    imgs:{ type:[String], default:'' },//食评配图 url
    preview:{ type:String, default:'' },//食评贴效果 url
    shop:{ type:[String], default:'' }//相应店铺 
},{collection : 'foodcomments'})

module.exports = {
    Model :  mongoose.model('FoodComment', FoodCommentSchema)
}