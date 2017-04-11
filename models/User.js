const base = require('./Base'),
    extend = base.extend,
    mongoose = base.mongoose,
    BaseSchema = base.Schema

const UserSchema = BaseSchema.extend({
    useraccount :　{type:String, default:''},//用户登录账号，需要唯一，初次name和useraccount相等
    level : { type:Number, default:0 },//用户等级 0(初哥)   1 2(吃货)    3 4 5(美食家)
    dollars:{ type:Number, default:0 },//用户赏金
    pwd:{ type:String, default:'' },//用户密码
    my_lookings:{ type:[mongoose.Schema.Types.ObjectId] },//用户发出的寻食贴
    my_comments:{ type:mongoose.Schema.Types.Mixed, default:{} },//用户发出的评论 {date:{obj:comment}}
    my_fcs:{ type:[mongoose.Schema.Types.ObjectId] },//用户发布的食评
    my_collections:{ type:[mongoose.Schema.Types.ObjectId] }//用户的收藏
}, {collection : 'users'})

module.exports = {
    Model :  mongoose.model('user',UserSchema)//导出用户模型，便于被实例化
}


