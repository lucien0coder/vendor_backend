/**
 * 食评模块业务
 */
const FoodCommentEntity = require('../models/FoodComment').Model

/** 1.2 GET /listFoodCommentByLocalAndCondition
 * @param:local;
 * @return:FoodCommentList
 */
const listFoodCommentByLocalAndCondition = async (local,condition)=>{

}

/** 1.3 GET /listUserCollectionAndCondition
 * @param:useraccount
 * @return:userCollection
 */
const listUserCollectionAndCondition = async (local, condition)=>{

}

/** 1.4 GET /viewFoodCommentImg/#foodCommentId/#imgID
 * @param:foodCommentID;imgID
 * @return:img
 */
const viewFoodCommentImg = async (foodCommentId, imgID)=>{

}
00
/** 1.5 GET /listFCComment/#foodComentID
 * @param:foodCommentID
 * @return:thisFCcommentList
 * direct to 「食评详情」页,显示comments和评论输入框 
 * */
  const listFCComment = async (foodCommentID)=>{

  }

/** 1.9 GET /foodComment/#socialID
 * @param:socialID
 * @return:0/1/2
 * direct to「食评详情」页
 * */
const foodCommentDetails = async (socialID)=>{

}

/** 3.2 POST /postFoodComment/FOODCOMMENT
 * @param:FOODCOMMENT
 * @return:0/1/2
 */
const saveFoodComment = async (foodComment)=>{

}

module.exports = {
  ListFoodCommentByLocalAndCondition: listFoodCommentByLocalAndCondition,
  ListUserCollectionAndCondition: listUserCollectionAndCondition,
  ViewFoodCommentImg: viewFoodCommentImg,
  ListFCComment: listFCComment,
  FoodCommentDetails: foodCommentDetails,
  SaveFoodComment: saveFoodComment
}