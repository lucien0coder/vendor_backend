var mongoose = new require('monogoose')

var TestSchema = new mongoose.Schema({
    name : { type:String },
    age : { type:Number, default:0 },
    time : { type:Date, default:Date.now },
    email : { type:String, default:'' }
})

