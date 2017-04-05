/**
 *  注册/登入/登出业务
 */
const UserModel = require('../models/User').UserModel
 /** 0.1 POST /signin: 
   * params:username;password
   * return:0/1/2
   * */
exports.signin = (useraccount, password)=>{

}

 /* 0.2 POST /signup:
   * params:useraccount;password;
   * return:0/1/2
   */
  exports.signup = (useraccount, password)=>{
    console.log('----signup --newAccount：' + useraccount)
    let user = new UserModel({
      name:useraccount,
      pwd:password
    })
    try{
      user.save();
      console.log('----signup sucess --newAccount：'+useraccount)
    }catch(err){
      console.log('usermodel save exception：'+err)
      throw err
    }
  }