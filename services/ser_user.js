/**
 *用户模块 业务
 */
const UserModel = require('../models/User').UserModel
import {utils} from '../utils/utils'
 /* 4.1 GET /listMyFC/#userid
   * params:userid
   * return:myFCList
   * */
  exports.listMyFC = (userid)=>{

  }

 /* 4.2 GET /listMyLooking/#userid
   * params:userid
   * return:myLookingList
   * */
  exports.listMyLooking = (userid)=>{

  }

 /* 4.3 GET /listMyPC/#userid
   * params:userid
   * return:myPCList
   */
  exports.listMyPC = (userid)=>{

  }

  /** 4.4 GET /listMyLike/#userid
   * @param:userid
   * @return:myLikeList
   */
  exports.listMyLike = (userid)=>{

  }


  /** 5.2 GET /myCollection/#userid
   * @param:userid
   * @return:myCollectionList
   */
  exports.myCollection = (userid)=>{

  }

  /** 5.3 PUT /updateMyInfo/#userid
   * @param:USER
   * @return:0/1/2
   */
  exports.updateMyInfo = (userid)=>{

  }

  /** 1.7 GET /foodCirtic/#useraccount
   * @param:useraccount
   * @return:0/1/2
   * direct to 「美食家详情」页
   * */
  exports.userinfo = (userid)=>{

  }

  /** 5.1 GET /myInfo/#userid
   * @param:userid
   * @return:USER
   */
  exports.myInfo = (userid)=>{

  }