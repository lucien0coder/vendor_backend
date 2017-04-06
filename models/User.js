const base = require('./Base'),
    mongoose = base.mongoose,
    BaseSchema = base.Schema

const UserSchema = BaseSchema({
    level : { type:String },//用户等级
    dollars:{ type:String },//用户赏金
    pwd:{ type:String },//用户密码
    my_lookings:{ type:String },//用户发出的寻食贴
    my_comments:{ type:String },//用户发出的评论
    my_fcs:{ type:String },//用户发布的食评
    my_collections:{ type:String }//用户的收藏
})

module.exports = {
    Model :  mongoose.model('user',UserSchema)//导出用户模型，便于被实例化
}


