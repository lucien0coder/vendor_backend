const base = require('Base')

const ShopSchema = new base.Schema({
    id:base.ObjId,
    its_lookings:{ type:String },//店铺发出的寻食贴
    bussiness_hours:{ type:String }//店铺营业时间 
})

const ShopModel = base.mongoose.model('Shop',ShopSchema)
exports.ShopModel = ShopModel //导出店铺实体