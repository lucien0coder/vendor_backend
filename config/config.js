const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:2701/vendor')

exports.mongoose = mongoose;//导出mongoose对象