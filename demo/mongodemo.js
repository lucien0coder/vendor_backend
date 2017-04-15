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
    route : Number,
    vendoer: {type:[mongoose.Schema.Types.Mixed]}
})

let Social = mongoose.model('social',SocicalSchema),
    FoodComment = mongoose.model('foodComment', FoodCommentSchema),
    Looking = mongoose.model('looking', LookingSchema)

let accord = new FoodComment({
    make:'Honda',
    year:'2015'
})

let ford = new Looking({
    make: 'Ford',
    route: 33,
    vendoer:[
        {user:'Sure', type:'family'},
        {user:'Ttida', type:'family'},
        {user:'lucien', type:'me'},
        {user:'Jennifer', type:'family'},
        {user:'jazzkid', type:'friend'},
        {user:'mcc', type:'mate'}

    ]
})
// ford.save()
// accord.save()
// golf.save()
// Social.find({}, function(err, socials){
//     console.log(socials[0])
//     console.log(socials[1])
// })
let condition = {_id:'58eecdc69e176c25e4974bd9'}
let cons = {
    make:{
        $in:['Honda','Ford']
}}
let field = {'vendoer':[]}
let qu = Looking.findOne(condition, (err, rs)=>{
    console.log(rs)
    if(err){

    }else{
        console.log(rs.vendoer)
        // var arr = vendorarr.filter(user=> user.type == 'family').map(user=> user.user)
        // console.log(arr)
        // console.log(typeof(rs.vendoer))
        // rs.forEach((r, index)=>{
            // console.log(r)
        // })
    }
})

// let condition = {make: 'Ford'}
// Looking.findOne(condition, (err, rs)=>{
//     if(!err){
//         console.log(rs)
//         let addingUser =  [{user:'Sure', type:'family'},
//         {user:'Ttida', type:'family'},
//         {user:'lucien', type:'me'},
//         {user:'Jennifer', type:'family'},
//         {user:'jazzkid', type:'friend'},
//         {user:'mcc', type:'mate'}]
//         // let vend = rs.vendoer
//         // vend.push(addingUser)
//         let update = {$set: {vendoer:addingUser}}
//         Looking.update(condition, update, (err, rs)=>{
//             console.log(rs)
//         })
//     }
// })

// let condition = {make: 'Ford'}
// let update = {$push: {vendoer:{user:'jay', type:'friend'} }}
// Looking.update(condition, update, (err ,rs)=>{
//     if(err) console.log(err)
// })

