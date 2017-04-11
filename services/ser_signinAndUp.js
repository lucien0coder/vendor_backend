/**
 *  注册/登入/登出业务
 */
const utils = require('../utils/utils')
const UserModel = require('../models/User').Model

  /** 0.1 POST /signin: 
   * @param:username;password
   * @return:0/1/2 (success/fails/err)
   * */
const signin = async(useraccount, password)=>{
  // 拿到用户名称查找密码，如无异常返回则，判断密码是否匹配。正常匹配
  utils.cons('info', 'signin')
  let r = 1
  try{
    let getter_user = await UserModel.find({useraccount:useraccount}, (err,rs)=>{
      if(err) throw err
    })
    getter_user.forEach((user,index)=>{
      getter_password = user.pwd
    })
    if(password == getter_password) r = 0
    utils.cons('info', 'userModel signin return success')
  }catch(err){
    utils.cons('err', 'userModel signin err:'+err)
    r = 2
    throw err
  }
  return r
}

  /** 0.2 POST /signup:
   * @param: useraccount
   * @param:password
   * @return:0/1/2 (success/fails/err)
   */
const signup = async(useraccount, password)=>{
  utils.cons('info', 'signup: ' + useraccount)
  let result = 1
  let user = new UserModel({
    useraccount : useraccount,
    name:useraccount,
    pwd:password
  })
  try{
    //查找是否有相同用户名称，如没有执行save，有则返回失败
    let flg = false // 默认没有相同名称
    await UserModel.find({useraccount: useraccount}, (err, rs)=>{
      if(err) throw err
      else if(rs.length != 0) flg = true //有同名用户
    })
    if(!flg){
      await user.save((err,rs)=>{
        if(err){
          utils.cons('err', 'signup save err: ' + err)
          result = 2
        }else{
          result = 0
          utils.cons('info','signup success: ' + useraccount)
        }
      });
    }
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
const findUser = async(useraccount)=>{
  utils.cons('info', 'findUser: ' + useraccount)
  if(useraccount){
    try{
      let r;
      await UserModel.find({useraccount:useraccount}, (err, rs)=>{
        if(err) r = 2
        else {
           utils.cons('info', 'FindUser  success')
          if(rs.length == 0){
            r = 0
          }else{
            r = 1
          }
        }
      })
      return r
    }catch(err){
      utils.cons('err', 'ser_sing FindUser')
      throw err
    }
  }else{
    return 'useraccount is null'
  }
}

module.exports = {
  Signin : signin,
  Signup : signup,
  FindUser : findUser
}