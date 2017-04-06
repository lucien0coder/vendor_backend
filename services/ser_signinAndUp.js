/**
 *  注册/登入/登出业务
 */
const utils = require('../utils/utils')
const UserModel = require('../models/User').Model

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
  // console.log('[vendor-api](info) signup ：' + useraccount)
  utils.cons('info', 'signup: ' + useraccount)
  let user = new UserModel({
    name:useraccount,
    pwd:password
  })
  try{
    user.save();
    utils.cons('info','signup success:' + useraccount)
  }catch(err){
    utils.cons('err', 'UserModel save err:' + err)
    throw err
  }
}