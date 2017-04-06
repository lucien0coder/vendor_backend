/**
 * 食评模块业务
 */
const FoodCommentEntity = require('../models/FoodComment').FoodCommentModel

  /** 1.2 GET /listFoodCommentByLocalAndCondition
   * @param:local;
   * @return:FoodCommentList
   */
  exports.listFoodCommentByLocalAndCondition = (local,condition)=>{

  }

  /** 1.3 GET /listUserCollectionAndCondition
   * @param:useraccount
   * @return:userCollection
   */
  exports.listUserCollectionAndCondition = (local, condition)=>{

  }

  /** 1.4 GET /viewFoodCommentImg/#foodCommentId/#imgID
   * @param:foodCommentID;imgID
   * @return:img
   */
  exports.viewFoodCommentImg = (foodCommentId, imgID)=>{

  }

  /** 1.5 GET /listFCComment/#foodComentID
   * @param:foodCommentID
   * @return:thisFCcommentList
   * direct to 「食评详情」页,显示comments和评论输入框 
   * */
   exports.listFCComment = (foodCommentID)=>{

   }

  /** 1.9 GET /foodComment/#socialID
   * @param:socialID
   * @return:0/1/2
   * direct to「食评详情」页
   * */
  exports.foodCommentDetails = (socialID)=>{

  }

  /** 3.2 POST /postFoodComment/FOODCOMMENT
   * @param:FOODCOMMENT
   * @return:0/1/2
   */
  exports.saveFoodComment = (foodComment)=>{

  }