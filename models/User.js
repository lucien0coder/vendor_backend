const base = require('./Base')

const UserSchema = new base.mongoose.Schema({
    _id : base.ObjId,//继承base实体id
    level : { type:String },//用户等级
    dollars:{ type:String },//用户赏金
    pwd:{ type:String },//用户密码
    my_lookings:{ type:String },//用户发出的寻食贴
    my_comments:{ type:String },//用户发出的评论
    my_fcs:{ type:String },//用户发布的食评
    my_collections:{ type:String }//用户的收藏
})

const UserModel = base.mongoose.model('User', UserSchema)
exports.UserModel = UserModel //导出用户模型，便于被实例化


