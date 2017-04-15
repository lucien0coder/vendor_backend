/**
 * 基本的功能模块
 */
const BaseModel = require('../models/Base').Model,
  utils = require('../utils/utils')
 
/** 1.1 GET /getLocation
 * @param:gps 
 */
const getLocation = async()=>{

}

/** 1.6 GET /selectLocation
 * @return:0/1/2
 * direct to 「地点切换」
 */
const selectLocation = async()=>{

}
  
/** 1.10 POST /postComment/#socialID
 * @param:COMMENT
 * @return:0/1/2
 */
const saveComment = async(comment, socialID, userid)=>{
  utils.cons('info', 'saveComment')
  let sid = socialID || ''
  let uid = userid || ''
  let r = 1
  if(sid && uid){
    let update = {$push:{ comments:{userid: comment} }}
    try{
      await BaseModel.update(condition, update, (err, rs)=>{
        if(err) throw err
        if(rs.ok == 1) r = 0
      })
    }catch(err){
      utils.cons('err', 'saveComment err: '+err)
      r = 2
      throw err
    }
  }
  return r
}

/** 1.11 GET /like/#socialID
 * @param:socialID;user
 * @return:0/1/2
 */
const saveLike = async(userid, socialID)=>{
  utils.cons('info', 'saveLike')
  let sid = socialID || ''
  let uid = userid || ''
  let r = 1
  if(sid && uid){
    let update = {$push:{ likes:{userid} }}
    try{
      await BaseModel.update(condition, update, (err, rs)=>{
        if(err) throw err
        if(rs.ok == 1) r = 0
      })
    }catch(err){
      utils.cons('err', 'saveLike err: '+err)
      r = 2
      throw err
    }
  }
  return r
}

/** 1.13 GET /listLike/#socialID
 * @param:socialID
 * @return:likeList
 */
const listLike = async(socialID)=>{
  utils.cons('info', 'listLike')
  let r = 1
  let sid = socialID || ''
  if(sid){
    let filed = {likes:[]}
    try{
      await BaseModel.findById(sid, filed, (err, rs)=>{
        if(err) throw err
        r = rs.likes
      })
    }catch(err){
      utils.cons('info', 'listLike err: '+err)
      r = 2
      throw err
    }
  }
  return r
}

/** 1.14 GET /listComment/#socialID
 * @param:socialID
 * @return:commentList
 */ 
const listComment = async(socialID)=>{
  utils.cons('info', 'listComment')
  let r = 1
  let sid = socialID || ''
  if(sid){
    let filed = {comments:[]}
    try{
      await BaseModel.findById(sid, filed, (err, rs)=>{
        if(err) throw err
        r = rs.comments
      })
    }catch(err){
      utils.cons('info', 'listComment err: '+err)
      r = 2
      throw err
    }
  }
  return r
}

module.exports = {
  SaveComment: saveComment,
  SaveLike: saveLike,
  ListLike: listLike,
  ListComment: listComment
}


