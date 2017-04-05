/**
 * mongodb 配置
 */
const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://localhost:27017/vendor').connection

db.on('error', console.error.bind(console, 'connection error:'));//监听是否有异常

exports.mongoose = mongoose;//导出mongoose对象
exports.db = db;