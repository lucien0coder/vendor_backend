/**
 *用户模块 业务
 */
const UserModel = require('../models/User').Model,
  FoodCommentModel = require('../models/FoodComment').Model,
  LookingModel = require('../models/Looking').Model,
  utils = require( '../utils/utils')

 /** 4.1 GET /listMyFC/#userid
   * @param:useraccount
   * @return:myFCList / 1 / 2
   * */
  const listMyFC = async (useraccount)=>{
    utils.cons('info', 'listMyFC')
    //1 从fc中获取到belonger为ua的列表，从user中获取myfc列表
    let result = '';
    let ua = useraccount || ''
    if(ua){
      try{
        await FoodCommentModel.find({belonger:ua}, (err, rs)=>{
          if(err) throw err
          else result = rs
        })
      }catch(err){
        utils.cons('err', 'listMyFC err:'+err)
        result = 2
        throw err
      } 
    }else result = 1 //useraccount 为空
    return result 
  }

 /** 4.2 GET /listMyLooking/#userid
   * @param:useraccount
   * @return:myLookingList
   * */
  const listMyLooking = async (useraccount)=>{
    //1 从looking中获取到belonger为ua的列表，从user中获取mylooking列表
    let result = '';
    let ua = useraccount || ''
    if(ua){
      try{
        await LookingModel.find({belonger:ua}, (err, rs)=>{
          if(err) throw err
          else result = rs
        })
      }catch(err){
        result = 2
        utils.cons('err', 'listMyLooking err:'+err)
        throw err
      } 
    }else result = 1 //useraccount 为空
    return result 
  }

 /** 4.3 GET /listMyPC/#userid
   * @param:useraccount
   * @return:myPCList  / 1 / 2 
   */
  const listMyPC = async (useraccount)=>{
    let result = '';
    let ua = useraccount || ''
    if(ua){
      try{
        await UserModel.find({useraccount:ua}, (err, rs)=>{
          if(err) throw err
          else if(rs.length != 0){
            rs.forEach((u, index)=>{
              result = u.my_comments
            })
          }
        })
      }catch(err){
        result = 2
        utils.cons('err', 'listMyPC err:'+err)
        throw err
      } 
    }else result = 1 //useraccount 为空
    return result 
  }

 /** 4.4 GET /listMyLike/#userid
   * @param:useraccount
   * @return:myLikeList
   */
  const listMyLike = async (useraccount)=>{
    let result = '';
    let ua = useraccount || ''
    if(ua){
      try{
        await UserModel.find({useraccount:ua}, (err, rs)=>{
          if(err) throw err
          else if(rs.length != 0){
            rs.forEach((u, index)=>{
              result = u.my_likes
            })
          }
        })
      }catch(err){
        result = 2
        utils.cons('err', 'listMyLike err:'+err)
        throw err
      } 
    }else result = 1 //useraccount 为空
    return result 
  }


 /** 5.2 GET /myCollection/#userid
   * @param:useraccount
   * @return:myCollectionList
   */
  const myCollection = async (useraccount)=>{
    let result = '';
    let ua = useraccount || ''
    if(ua){
      try{
        await UserModel.find({useraccount:ua}, (err, rs)=>{
          if(err) throw err
          else if(rs.length != 0){
            rs.forEach((u, index)=>{
              result = u.my_collections
            })
          }
        })
      }catch(err){
        result = 2
        utils.cons('err', 'myCollection err:'+err)
        throw err
      } 
    }else result = 1 //useraccount 为空
    return result 
  }

 /** 5.3 PUT /updateMyInfo/#userid
   * @param:USER
   * @return:0/1/2
   */
  const updateMyInfo = async (user)=>{
    let r = 1 //传入的参数异常，useraccount 为空的
    let ua = user.useraccount || ''
    let update = {$set: user}
    if(ua){
      try{
        await UserModel.update({useraccount: ua}, update, (err, rs)=>{
          if(err) throw err
          if(rs.ok == 0) r = 1 //fails
          else r = 0
        })
      }catch(err){
        r = 2
        throw err
      }
    }
    return r
  }

 /** 1.7 GET /foodCirtic/#useraccount
   * @param:useraccount
   * @return:userinfo / 1 not esixt/ 2 err
   * or direct to 「美食家详情」页
   * */
  const userinfo = async (useraccount)=>{
    utils.cons('info', 'userinfo: ' + useraccount)
    let ua = useraccount || ''
    let r = '';
    if(ua){
      try{
        await UserModel.findOne({name:ua}, (err, rs)=>{
          if(err) throw err
          else  r = rs
        })
      }catch(err){
        utils.cons('err', 'ser_user userinfo:'+err)
        r = 2
        throw err
      }
    }else{
      r = 'useraccount is null'
    }
    return r
  }

 /** 5.1 GET /myInfo/#useraccount
   * @param:useraccount
   * @return:USER
   */
  const myInfo = async (useraccount)=>{
    return this.userinfo(useraccount)
  }

  module.exports = {
    listMyFC:listMyFC,
    listMyLooking:listMyLooking,
    listMyPC:listMyPC,
    listMyLike:listMyLike,
    myCollection:myCollection,
    updateMyInfo:updateMyInfo,
    userinfo:userinfo,
    myInfo:myInfo
  }