/**
 * 基本的功能模块
 */
 const BaseModel = require('../models/Base').BaseModel
 /* 1.1 GET /getLocation
   * gps 
   * */
   exports.getLocation = ()=>{

   }

   /* 1.6 GET /selectLocation
   * return:0/1/2
   * direct to 「地点切换」
   * */
  exports.selectLocation = ()=>{

  }
   
  /* 1.10 POST /postComment/#socialID
   * params:COMMENT
   * return:0/1/2
   * */
  exports.saveComment = (comment, socialID, userid)=>{

  }

  /* 1.11 GET /like/#socialID
   * params:socialID;user
   * return:0/1/2
   * */
  exports.saveLike = (userid, socialID)=>{

  }

  /* 1.12 GET /collect/#socialID
   * params:socialID;user
   * return:0/1/2
   * */
  exports.saveCollect = (userid, socialID)=>{

  }

  /* 1.13 GET /listLike/#socialID
   * params:socialID
   * return:likeList
   * */
  exports.listLike = (socialID)=>{

  }

  /* 1.14 GET /listComment/#socialID
   * params:socialID
   * return:commentList
   */ 
  exports.listComment = (socialID)=>{

  }

 