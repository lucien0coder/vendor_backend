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
  let result = 1
  let user = new UserModel({
    name:useraccount,
    pwd:password
  })
  try{
    //查找是否有相同用户名称，如没有执行save，有则返回失败
    user.save((err,rs)=>{
      if(err){
        utils.cons('err', 'signup save err: ' + err)
        result = 2
      }else{
        result = 0
        utils.cons('info','signup success: ' + useraccount)
      }
    });
  }catch(err){
    result = 2
    utils.cons('err', 'UserModel save err: ' + err)
    throw err
  }
  return result
}

/**
 * 验证用户是否存在
 * @param: useraccount
 * @return:0/1/2 (/none/exist/err)
 */
exports.findUser = (useraccount)=>{
  utils.cons('info', 'findUser: ')
}