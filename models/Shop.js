const base = require('./Base'),
    extend = base.extend,
    mongoose = base.mongoose,
    BaseSchema = base.Schema

const ShopSchema = BaseSchema.extend({
    its_lookings:{ type:[ShopSchema.Types.ObjectId], default:'' },//店铺发出的来尝贴
    bussiness_hours:{ type:mixed, default:{} }//店铺营业时间 {startTime:xxx,endTime:xxx}
})

module.exports = {
    Model : mongoose.model('Shop',ShopSchema)
} //导出店铺实体