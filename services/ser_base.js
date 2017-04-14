/**
 * 基本的功能模块
 */
const BaseModel = require('../models/Base').Model
 
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

}

/** 1.11 GET /like/#socialID
 * @param:socialID;user
 * @return:0/1/2
 */
const saveLike = async(userid, socialID)=>{

}

/** 1.12 GET /collect/#socialID
 * @param:socialID 
 * @param:userid 
 * @param:type  店铺、美食家、食评、
 * @return:0/1/2
 */
const saveCollect = async(userid, type, socialID)=>{
  //
}

/** 1.13 GET /listLike/#socialID
 * @param:socialID
 * @return:likeList
 */
const listLike = async(socialID)=>{

}

/** 1.14 GET /listComment/#socialID
 * @param:socialID
 * @return:commentList
 */ 
const listComment = async(socialID)=>{

}

module.exports = {
  SaveComment: saveComment,
  SaveLike: saveLike,
  SaveCollect: saveCollect,
  ListLike: listLike,
  ListComment: listComment
}


