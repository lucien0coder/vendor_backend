/**
 * 寻食模块业务
 */
const LookingModel = require('../models/Looking').Model,
  utils = require('../utils/utils')

  /** 2.1 GET /listLookingByLocalAndCondition
   * @param:local
   * @return:Looking
   * */
const listLookingByLocalAndCondition = async (condition)=>{
  utils.cons('info','listLookingByLocalAndCondition')
  //如果两参数都为空，则查找前20条
  let conditions = condition || {}
  let r = 1
  try{
    await LookingModel.find(conditions,null,{limit:20} (err, rs)=>{
      if(err) throw err
      r = rs
    })
  }catch(err){
    utils.cons('err', 'listLookingByLocalAndCondition err: '+ err)
    r = 2
    throw err
  }
  return r
}

/** 2.2 GET /looking/#socialID
 * @param:socialId
 * direct to「寻食详情」页
 * */
const lookingDetails = async (socialID)=>{
  utils.cons('info', 'lookingDetails')
  let sid = socialID || ''
  let r = 1
  try{
    await LookingModel.findOne(sid, (err, rs)=>{
      if(err) throw err
      r = rs
    })
  }catch(err){
    utils.cons('err', 'lookingDetails err: '+err)
    r = 2
    throw err
  }
  return r
}

/** 3.1 POST /postLooking/LOOKING
 * @param:LOOKING
 * @return:0/1/2
 */ 
const saveLooking = async (looking) =>{
  utils.cons('info', 'saveLooking')
  let p_looking = looking || {}
  let r = 1
  if(p_looking.date){//判断对象是否为空  date 是默认存在参数
    let new_looking = new LookingModel(looking)
    try{
      await new_looking.save((err, rs)=>{
        if(err) throw err
        r = 0
      })
    }catch(err){
      utils.cons('err', 'saveLooking err: '+err)
      r = 2
      throw err
    }
  }
  return r
}

/** 2.3 POST /beAVendor/#socialID/USER(temporary)
 * @param:socialId;USER
 * @return:0/1/2
 * */
const addVendor = async (socialID, user)=>{
  utils.cons('info', 'addVendor')
  let condition = {_id:socialID}
  let rs = 1
  try{
    await LookingModel.findOne(condition, (err, rs)=>{
      if(err) throw err
      let addingUser = {ua: user}
      let thisVendor = rs.answers
      thisVendor.assign(addingUser)
      utils.cons('info', 'addVendor findOne success')
      LookingModel.update(condition, ($set,thisVendor),(err, rs)=>{
        if(err) throw err
        if(rs.ok == 1) r = 0
      })
    })
  }catch(err){
    utils.cons('err', 'addVendor err: '+err)
    r = 2
    throw err
  }
  return r
}

module.exports = {
  ListLookingByLocalAndCondition : listLookingByLocalAndCondition,
  LookingDetails : lookingDetails,
  AddVendor : addVendor,
  SaveLooking : saveLooking
}