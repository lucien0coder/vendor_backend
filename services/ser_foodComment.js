/**
 * 食评模块业务
 */

 /* 1.2 GET /listFoodCommentByLocalAndCondition
   * params:local;
   * return:FoodCommentList

 * 1.3 GET /listUserCollectionAndCondition
   * params:useraccount
   * return:userCollection

 * 1.4 GET /viewFoodCommentImg/#foodCommentId/#imgID
   * params:foodCommentID;imgID
   * return:img

 * 1.5 GET /listFCComment/#foodComentID
   * params:foodCommentID
   * return:thisFCcommentList
   * direct to 「食评详情」页,显示comments和评论输入框 

 * 1.6 GET /selectLocation
   * return:0/1/2
   * direct to 「地点切换」

 * 1.7 GET /foodCirtic/#useraccount
   * params:useraccount
   * return:0/1/2
   * direct to 「美食家详情」页

 * 1.8 GET /shop/#shopID
   * params:shopId
   * return:0/1/2   
   * direct to 「店铺详情」页

 * 1.9 GET /foodComment/#socialID
   * params:socialID
   * return:0/1/2
   * direct to「食评详情」页

 * 3.2 POST /postFoodComment/FOODCOMMENT
   * params:FOODCOMMENT
   * return:0/1/2
*/