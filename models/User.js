const base = require('./Base'),
    extend = base.extend,
    mongoose = base.mongoose,
    BaseSchema = base.Schema

const UserSchema = BaseSchema.extend({
    level : { type:String, default:'' },//用户等级
    dollars:{ type:String, default:'' },//用户赏金
    pwd:{ type:String, default:'' },//用户密码
    my_lookings:{ type:String, default:'' },//用户发出的寻食贴
    my_comments:{ type:String, default:'' },//用户发出的评论
    my_fcs:{ type:String, default:'' },//用户发布的食评
    my_collections:{ type:String, default:'' }//用户的收藏
})

module.exports = {
    Model :  mongoose.model('user',UserSchema)//导出用户模型，便于被实例化
}


