var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/test')



var TestSchema = new mongoose.Schema({
    name : { type:String },
    age : { type:Number, default:0 },
    time : { type:Date, default:Date.now },
    email : { type:String, default:'' }
})

// var db = mongoose.connection;

var db = mongoose.createConnection('localhost','test')//如此创建连接



db.on('error', console.error.bind(console, 'connection error:'));//监听是否有异常
db.once('open', function() {
    console.log('we\'re connected!')
    
});
    //schema
    // var kittySchema = new mongoose.Schema({
    //     name: String
    // })

    var PersonSchema = new mongoose.Schema({
        name: String
    })

    // kittySchema.method('sayHi',function(){
    //     console.log('Hi, I\'m schema')
    // })

    //model
    // var Kitten = db.model('Kitten', kittySchema)
    var PersonModel = db.model('Person', PersonSchema)

    //entity
    // var silence = new Kitten({name: 'Silence'})
    // console.log(silence.name)   
    var personEntity = new PersonModel({
        name:'Jennifer'
    })
    console.log(personEntity.name)

    //-----------------数据库操作-----------------   
    //insert
    // personEntity.save()//保存在数据库
    //find
    PersonModel.find(function(err,person){
        console.log(person)
    })


