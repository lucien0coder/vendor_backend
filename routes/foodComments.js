/* 1.1 GET /foodComment/listByLocalAndCondition
   * params:local;
   * return:FoodCommentList

 * 1.2 GET /foodComment/listByUserCollectionAndCondition
   * params:useraccount
   * return:userCollection

 * 1.3 GET /foodComment/img/#foodCommentId/#imgID
   * params:foodCommentID;imgID
   * return:img

 * 1.4 GET /foodComment/comment/#foodComentID
   * params:foodCommentID
   * return:thisFCcommentList
   * direct to 「食评详情」页,显示comments和评论输入框 

 * 1.5 GET /foodComment/#socialID
   * params:socialID
   * return:0/1/2
   * direct to「食评详情」页
   */ 
  var router = require('koa-router')();
module.exports = router;