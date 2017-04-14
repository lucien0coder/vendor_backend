let router = require('koa-router')();
const sFoodComment = require('../services/ser_foodComment'),
  utils = require('../utils/utils')

/**
 * 通过定位和条件搜索出食评
 * 1.1 GET /foodComment/listByLocalAndCondition
 * @param:local;
 * @return:FoodCommentList
 */
router.get('/',async(ctx, next)=>{
    let rs = 1
    rs = await sFoodComment.ListFoodCommentByLocalAndCondition()
    ctx.type = 'application/json'
    ctx.state = (rs == 2 && '500') || '200'
    ctx.body = rs
})

/**
 * 
 * 1.2 GET /foodComment/listByUserCollectionAndCondition
   * @param:useraccount
   * @return:userCollection
 */
router.get('/listByUserCollectionAndCondition', async(ctx, next)=>{
    let rs = 1
    let ua = ctx.request.body.useraccount || ''
    if(ua){
      rs = await sFoodComment.ListUserCollectionAndCondition(ua)
    }
    ctx.type = 'application/json'
    ctx.state = (rs == 2 && '500') || '200'
    ctx.body = rs
})

/**
 * 获取某个食评的相关图片
 * 1.3 GET /foodComment/img/#foodCommentId/#imgID
   * @param:foodCommentID
   * @param:imgID
   * @return:img
 */
router.get('/img/:foodCommentId', async(ctx, next)=>{
    let rs = 1
    let id = ctx.params.foodCommentId || ''
    if(id){
      rs = await sFoodComment.ViewFoodCommentImg(id)
    }
    ctx.type = 'application/json'
    ctx.state = (rs == 2 && '500') || '200'
    ctx.body = rs
})

/** 可用base中的方法
 *  1.4 GET /foodComment/comment/#foodComentID
   * @param:foodCommentID
   * @return:thisFCcommentList
   * direct to 「食评详情」页,显示comments和评论输入框
 */
router.get('/comment/#foodComentID', async(ctx, next)=>{
    // let rs = 1
    // rs = await sFoodComment
    // ctx.type = 'application/json'
    // ctx.state = (rs == 2 && '500') || '200'
    // ctx.body = rs
})

/**获取详情食评页，并提示跳转到食评详细页面
 *  1.5 GET /foodComment/#socialID
   * @param:socialID
   * @return:0/1/2
   * direct to「食评详情」页
 */
router.get('/:socialID', async(ctx, next)=>{
    let rs = 1
    let id = ctx.params.socialID || ''
    if(id){
      rs = await sFoodComment.ListFCComment(id)
    }
    ctx.type = 'application/json'
    ctx.state = (rs == 2 && '500') || '200'
    ctx.body = rs
})

module.exports = router;