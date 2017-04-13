/**
 * 店铺模块
 */
const ShopModel = require('../models/Shop').Model,
  Looking = require('../models/Looking').Model,
  utils = require('../utils/utils')

 /** 3.3 POST /postInviting/INVITING
  * @param:INVITING
  * @return:0/1/2
  */
const saveInviting = async (inviting)=>{
  utils.cons('info', 'saveInviting')
  let rs = 1
  let looking = inviting || ''
  let new_Looking = new Looking(inviting)
  if(looking){
    try{
      await new_Looking.save((err, rs)=>{
        if(err) throw err
        r = 0
      })
    }catch(err){
      utils.cons('err', 'saveInviting err: '+ err)
      rs = 2
      throw err
    }
  }
  return rs
}

  /** 1.8 GET /shop/#shopID
   * @param:shopId
   * @return:shop/1/2   
   * direct to 「店铺详情」页
   */
const shopinfo = async (shopid)=>{
  utils.cons('info', 'shopinfo')
  let psid = shopid || ''
  let r = 1
  if(psid){
    let condition = {_id:psid}
    try{
      await ShopModel.findOne(condition,(err, rs)=>{
        if(err) throw err
        r = rs
      })
    }catch(err){
      r = 2
      utils.cons('err', 'shopinfo err: '+err)
      throw err
    }
  }
  return r
}

module.exports = {
  SaveInviting : saveInviting,
  Shopinfo : shopid
}