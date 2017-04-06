const base = require('./Base'),
    extend = base.extend,
    mongoose = base.mongoose,
    BaseSchema = base.Schema

const LookingSchema = BaseSchema.extend({
    look_type:{ type:String, default:'' },//寻食贴类型，求荐还是来尝
    prescription:{ type:String, default:'' },//贴子有效期
    value:{ type:String, default:'' },//贴子赏金金额
    beneficiary:{ type:String, default:'' },//赏金发放人
    answers:{ type:String, default:'' },//答案
    release_time:{ type:String, default:'' }//发帖时间
})

module.exports = {
    Model : mongoose.model('Looking',LookingSchema)
}