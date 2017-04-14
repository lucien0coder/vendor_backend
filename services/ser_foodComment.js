/**
 * 食评模块业务
 */
const FoodCommentEntity = require('../models/FoodComment').Model,
  utils = require('../utils/utils'),
  UserModel = require('../models/User').Model

/** 1.2 GET /listFoodCommentByLocalAndCondition
 * @param:local;
 * @return:FoodCommentList
 */
const listFoodCommentByLocalAndCondition = async (local)=>{
  utils.cons('info', 'listFoodCommentByLocalAndCondition')
  let locals = local || ''
  let r = 1
  if(locals){
    try{
      await FoodCommentEntity.find({local:locals}, (err,rs)=>{
        if(err) throw err
        r = rs
      })
    }catch(err){
      utils.cons('err', 'listFoodCommentByLocalAndCondition err: '+err)
      r = 2
      throw err
    }
  }
  return r
}

/** 1.3 GET /listUserCollectionAndCondition
 * @param:useraccount
 * @return:userCollection
 */
const listUserCollectionAndCondition = async (useraccount, condition)=>{
  utils.cons('info', 'listUserCollectionAndCondition')
  let conditinos = condition || {}
  let r = 1
  //关注的人所发出的食评 1 找到关注的人 2 找人关注的人的食评按排序
  if(conditinos.date){
    try{
      let search_wacting_condition = {
        useraccount: useraccount
      }
      let filed = { 'my_collections':[] }
      // 1
      await UserModel.find(search_wacting_condition, filed, async (err, rs)=>{
        if(err) throw err
        let collection = rs.my_collections
        let userarr = collection.filter(collect=> collect.type == 'user').map(collect=> collect.userid)//获取用户关注的美食家id列表['123123','123123','232312','324234']
        let listFCQuery = { belonger : {'$in': userarr } }
        await FoodCommentEntity.find(listFCQuery, (err, fcrs)=>{
          if(err) throw err
          r = fcrs
        })
      })
    }catch(err){
      utils.cons('err', 'listUserCollectionAndCondition: '+err)
      r = 2
      throw err
    }
  }
  return r
}

/** 1.4 GET /viewFoodCommentImg/#foodCommentId/#imgID
 * @param:foodCommentID;
 * @param:imgID
 * @return:img
 */
const viewFoodCommentImg = async (foodCommentId, imgID)=>{
  utils.cons('info', 'viewFoodCommentImg')
  let r = 1
  if(foodCommentID){
    let filed = {'imgs':[]}
    try{
      await FoodCommentEntity.findByID(foodCommentID, filed, (err, rs)=>{
        if(err) throw err
        r = rs.imgs
      })
    }catch(err){
      utils.cons('err', 'viewFoodCommentImg')
      r = 2
      throw err
    }
  }
  return r
}

/** 1.5 GET /listFCComment/#foodComentID
 * @param:foodCommentID
 * @return:thisFCcommentList
 * direct to 「食评详情」页,显示comments和评论输入框 
 * */
const listFCComment = async (foodCommentID)=>{
  utils.cons('info', 'listFCComment')
  let r = 1
  if(foodCommentID){
    try{
      await FoodCommentEntity.findByID(foodCommentID, (err, rs)=>{
        if(err) throw err
        r = rs
      })
    }catch(err){
      utils.cons('err', 'listFCComment')
      r = 2
      throw err
    }
  }
  return r
}

/** 3.2 POST /postFoodComment/FOODCOMMENT
 * @param:FOODCOMMENT
 * @return:0/1/2
 */
const saveFoodComment = async (foodComment)=>{
  utils.cons('info', 'saveFoodComment')
  let r = 1
  if(foodComment.date){
    let new_fc = new FoodCommentEntity(foodComment)
    try{
      await new_fc.save((err, rs)=>{
        if(err) throw err
        r = 0
      })
    }catch(err){
      utils.cons('err', 'saveFoodComment err: '+err)
      r = 2
      throw err
    }
  }
  return r
}

module.exports = {
  ListFoodCommentByLocalAndCondition: listFoodCommentByLocalAndCondition,
  ListUserCollectionAndCondition: listUserCollectionAndCondition,
  ViewFoodCommentImg: viewFoodCommentImg,
  ListFCComment: listFCComment,
  SaveFoodComment: saveFoodComment
}