/**
 * mongodb 配置
 */
const mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend')
const db = mongoose.connect('mongodb://localhost:27017/vendor').connection

db.on('open', ()=>{console.log('[vendor-api](info) connetion open ....')})
db.on('error', console.error.bind(console, 'connection error:'));//监听是否有异常
db.on('close', ()=>{console.log('[vendor-api](info) connection closed !')})

module.exports = {
    mongoose : mongoose,//导出mongoose对象
    db : db,
    extend : extend
}
