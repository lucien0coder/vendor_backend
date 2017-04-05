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
    let user = new UserModel({
      name:useraccount,
      pwd:password
    })
    user.save();
  }