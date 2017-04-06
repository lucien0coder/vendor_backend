/**
 * mongodb 配置
 */
const mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend'),
    utils = require('../utils/utils')
const db = mongoose.connect('mongodb://localhost:27017/vendor').connection

db.on('open', ()=>{utils.cons('info','connection open...')})
db.on('error', console.error.bind(console, '[vendor-api](err) connection error:'));//监听是否有异常
db.on('close', ()=>{utils.cons('info', 'connection closed!')})

module.exports = {
    mongoose : mongoose,//导出mongoose对象
    db : db,
    extend : extend
}
