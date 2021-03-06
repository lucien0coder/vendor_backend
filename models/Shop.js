const base = require('./Base'),
    extend = base.extend,
    mongoose = base.mongoose,
    BaseSchema = base.Schema

const ShopSchema = BaseSchema.extend({
    its_lookings:{ type:[mongoose.Schema.Types.ObjectId] },//店铺发出的来尝贴
    bussiness_hours:{ type:mongoose.Schema.Types.Mixed, default:{} }//店铺营业时间 {startTime:xxx,endTime:xxx}
},{collection : 'shops'})

module.exports = {
    Model : mongoose.model('Shop',ShopSchema)
} //导出店铺实体