const base = require('./Base'),
    extend = base.extend,
    mongoose = base.mongoose,
    BaseSchema = base.Schema

const LookingSchema = BaseSchema.extend({
    look_type:{ type:Boolean, default:true },//寻食贴类型（true），求荐还是来尝（false）
    prescription:{ type:Date, default:Date.now() },//贴子有效期
    value:{ type:Number, default:1 },//贴子赏金金额
    beneficiary:{ type:[mongoose.Schema.Types.ObjectId], default:[] },//赏金发放人
    answers:{ type:mongoose.Schema.Types.Mixed, default:{} },     //答案 {user:answer}
    release_time:{ type:Date, default:Date.now() }//发帖时间
}, {collection : 'lookings'})

module.exports = {
    Model : mongoose.model('Looking',LookingSchema)
}