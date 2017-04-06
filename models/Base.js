const dbConfig = require('../config/config'),
    mongoose = dbConfig.mongoose,
    db = dbConfig.db,
    extend = dbConfig.extend,
    Schema = mongoose.Schema

const BaseSchema = new Schema({
    belonger : { type:String },      // 基本体，拥有者
    name : { type:String },          // 基本体，名称
    local : { type:String},         // 基本体，位置
    photo : { type:String },         // 基本体，大头贴
    desc : { type:String },          // 基本体，简述
    likes : { type:String },         // 基本体，对象被赞的集合
    comments : { type:String },      // 基本体，对象收到的评论集合
    entityType : { type:String },    // 基本体，对象类型
    keywords : { type:String }       // 基本体，关键字/美食分类
},{collection : 'social', discriminatorKey : '_type'})

module.exports = {
    Schema : BaseSchema.extend(),
    mongoose : mongoose,
    Model : mongoose.model('social', BaseSchema)
}