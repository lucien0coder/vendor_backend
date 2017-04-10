/**
 *用户模块 业务
 */
const UserModel = require('../models/User').UserModel
const utils = require( '../utils/utils')

 /** 4.1 GET /listMyFC/#userid
   * @param:userid
   * @return:myFCList
   * */
  const listMyFC = async (useraccount)=>{

  }

 /** 4.2 GET /listMyLooking/#userid
   * @param:userid
   * @return:myLookingList
   * */
  const listMyLooking = async (useraccount)=>{

  }

 /** 4.3 GET /listMyPC/#userid
   * @param:userid
   * @return:myPCList
   */
  const listMyPC = async (useraccount)=>{

  }

 /** 4.4 GET /listMyLike/#userid
   * @param:userid
   * @return:myLikeList
   */
  const listMyLike = async (useraccount)=>{

  }


 /** 5.2 GET /myCollection/#userid
   * @param:userid
   * @return:myCollectionList
   */
  const myCollection = async (useraccount)=>{

  }

 /** 5.3 PUT /updateMyInfo/#userid
   * @param:USER
   * @return:0/1/2
   */
  const updateMyInfo = async (useraccount)=>{

  }

 /** 1.7 GET /foodCirtic/#useraccount
   * @param:useraccount
   * @return:userinfo / 1 not esixt/ 2 err
   * or direct to 「美食家详情」页
   * */
  const userinfo = async (useraccount)=>{
    utils.cons('info', 'userinfo: ' + useraccount)
    if(useraccount){
      try{
        let r;
        await UserModel.find({name:useraccount}, (err, rs)=>{
          if(err) r = 2
          else {
            utils.cons('info', 'userinfo  success')
            if(rs.length != 0){
              r = rs
            }else{
              r = 1
            }
          }
        })
        return r
      }catch(err){
        utils.cons('err', 'ser_user userinfo')
        throw err
      }
    }else{
      return 'useraccount is null'
    }
  }

 /** 5.1 GET /myInfo/#userid
   * @param:userid
   * @return:USER
   */
  const myInfo = async (userid)=>{

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