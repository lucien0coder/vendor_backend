const dbConfig = require('../config/config'),
    mongoose = dbConfig.mongoose,
    db = dbConfig.db,
    extend = dbConfig.extend,
    Schema = mongoose.Schema

const BaseSchema = new Schema({
    belonger : { type:Schema.Types.ObjectId, default:0 },      // 基本体，拥有者
    name : { type:String, default:'' },          // 基本体，名称
    local : { type:String, default:''},         // 基本体，位置
    photo : { type:String, default:'' },         // 基本体，大头贴  url
    desc : { type:String, default:'' },          // 基本体，简述 
    likes : { type:[String], default:'' },         // 基本体，对象被赞的集合
    comments : { type:Schema.Types.Mixed, default:{} },      // 基本体，对象收到的评论集合(user:comment)
    keywords : { type:[String], default:'' },       // 基本体，关键字/美食分类
    date : { type:Date, default:Date.now()}         //产生时间
},{collection : 'social', discriminatorKey : '_type'})

module.exports = {
    Schema : BaseSchema,
    extend : extend,
    mongoose : mongoose,
    Model : mongoose.model('social', BaseSchema)
}