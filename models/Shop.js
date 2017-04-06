const base = require('./Base'),
    extend = base.extend,
    mongoose = base.mongoose,
    BaseSchema = base.Schema

const ShopSchema = BaseSchema.extend({
    its_lookings:{ type:String, default:'' },//店铺发出的寻食贴
    bussiness_hours:{ type:String, default:'' }//店铺营业时间 
})

module.exports = {
    Model : mongoose.model('Shop',ShopSchema)
} //导出店铺实体