/**
 * 寻食模块业务
 */
const LookingModel = require('../models/Looking').LookingModel

  /** 2.1 GET /listLookingByLocalAndCondition
   * @param:local
   * @return:Looking
   * */
  exports.listLookingByLocalAndCondition = (local, condition)=>{

  }

  /** 2.2 GET /looking/#socialID
   * @param:socialId
   * direct to「寻食详情」页
   * */
  exports.lookingDetails = (socialID)=>{

  }

  /** 2.3 POST /beAVendor/#socialID/USER(temporary)
   * @param:socialId;USER
   * @return:0/1/2
   * */
  exports.addVendor = (socialID, user)=>{

  }

  /** 3.1 POST /postLooking/LOOKING
   * @param:LOOKING
   * @return:0/1/2
   */ 
  exports.saveLooking = (looking) =>{

  }