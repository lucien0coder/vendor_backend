/**
 *  注册/登入/登出业务
 */
const utils = require('../utils/utils')
const UserModel = require('../models/User').Model

  /** 0.1 POST /signin: 
   * @param:username;password
   * @return:0/1/2 (success/fails/err)
   * */
exports.signin = (useraccount, password)=>{

}

  /** 0.2 POST /signup:
   * @param: useraccount
   * @param:password
   * @return:0/1/2 (success/fails/err)
   */
exports.signup = (useraccount, password)=>{
  utils.cons('info', 'signup: ' + useraccount)
  let user = new UserModel({
    name:useraccount,
    pwd:password
  })
  try{
    user.save((err,rs)=>{
      if(err){
        utils.cons('err', 'signup save err: ' + err)
      }else{
        utils.cons('info','signup success: ' + useraccount)
      }
    });
  }catch(err){
    utils.cons('err', 'UserModel save err: ' + err)
    throw err
  }
}

/**
 * 验证用户是否存在
 * @param: useraccount
 * @return:0/1/2 (/none/exist/err)
 */
exports.findUser = (useraccount)=>{
  utils.cons('info', 'findUser: ')
}