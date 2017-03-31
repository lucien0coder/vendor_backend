const base = require('Base')

const LookingSchema = new base.Schema({
    id:base.ObjId,
    look_type:{ type:String },//寻食贴类型，求荐还是来尝
    prescription:{ type:String },//贴子有效期
    value:{ type:String },//贴子赏金金额
    beneficiary:{ type:String },//赏金发放人
    answers:{ type:String },//答案
    release_time:{ type:String }//发帖时间
})

const LookingModel = base.mongoose.model('Looking',LookingSchema)
exports.LookingModel = LookingModel