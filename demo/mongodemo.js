var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    extend = require('mongoose-schema-extend')
mongoose.connect('mongodb://localhost/test')

// var db = mongoose.connection;

// var db = mongoose.createConnection('localhost','test')//如此创建连接



// db.on('error', console.error.bind(console, 'connection error:'));//监听是否有异常
// db.once('open', function() {
//     console.log('we\'re connected!')
    
// });
    //schema
    // var kittySchema = new mongoose.Schema({
    //     name: String
    // })

    // var PersonSchema = new mongoose.Schema({
    //     name: String
    // })
    // PersonSchema.method.findJen = function(){

    // }

    // kittySchema.method('sayHi',function(){
    //     console.log('Hi, I\'m schema')
    // })

    //model
    // var Kitten = db.model('Kitten', kittySchema)
    // var PersonModel = db.model('Person', PersonSchema)

    //entity
    // var silence = new Kitten({name: 'Silence'})
    // console.log(silence.name)   
    // var personEntity = new PersonModel({
    //     name:'Jennifer'
    // })
    // console.log(personEntity.name)

    //-----------------数据库操作-----------------   
    //insert
    // personEntity.save()//保存在数据库
    //find
    // PersonModel.find(function(err,person){
    //     console.log('删除前...')
    //     console.log(person)
    // })
    //remove
    // PersonModel.remove({name:'Lucien'},()=>{
    //     console.log('del..')
    // })

    // PersonModel.find((err,person)=>{
    //     console.log('删除后的...')
    //     console.log(person)
    // })

let SocicalSchema = new Schema({
    make : String
}, { collection : 'socical', discriminatorKey: '_type'})

let FoodCommentSchema = SocicalSchema.extend({
    year : Number
})

let LookingSchema = SocicalSchema.extend({
    route : Number
})

let Social = mongoose.model('social',SocicalSchema),
    FoodComment = mongoose.model('foodComment', FoodCommentSchema),
    Looking = mongoose.model('looking', LookingSchema)

let accord = new FoodComment({
    make:'Honda',
    year:'2015'
})

let golf = new Looking({
    make: 'Dos Auto',
    route: 33
})

// accord.save()
// golf.save()
// Social.find({}, function(err, socials){
//     console.log(socials[0])
//     console.log(socials[1])
// })
let qu = Social.find({make:'Dos Auto'},(err, rs)=>{
    if(err){

    }else{
        console.log(rs)
        rs.forEach((r, index)=>{
            console.log(r.route)
        })
    }
})