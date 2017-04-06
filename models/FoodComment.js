const base = require('./Base')

const FoodCommentSchema = new base.mongoose.Schema({
    id:base.ObjId,
    content:{ type:String },//食评内容
    img:{},//食评配图
    preview:{},//食评贴效果
    shop:{}//相应店铺
})

const FoodCommentModel = base.mongoose.model('FoodComment', FoodCommentSchema)
exports.FoodCommentModel = FoodCommentModel