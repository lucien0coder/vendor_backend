var router = require('koa-router')();

/**
 * 通过定位和条件搜索出食评
 * 1.1 GET /foodComment/listByLocalAndCondition
 * params:local;
 * return:FoodCommentList
 */
router.get('/',async(ctx, next)=>{
    ctx.body = 'listByLocalAndCondition'
})

/**
 * 
 * 1.2 GET /foodComment/listByUserCollectionAndCondition
   * params:useraccount
   * return:userCollection
 */
router.get('/listByUserCollectionAndCondition', async(ctx, next)=>{
    
})

/**
 * 获取某个食评的相关图片
 * 1.3 GET /foodComment/img/#foodCommentId/#imgID
   * params:foodCommentID;imgID
   * return:img
 */
router.get('/img/#foodCommentId', async(ctx, next)=>{
    
})

/** 可用base中的方法
 *  1.4 GET /foodComment/comment/#foodComentID
   * @param:foodCommentID
   * @return:thisFCcommentList
   * direct to 「食评详情」页,显示comments和评论输入框
 */
router.get('/comment/#foodComentID', async(ctx, next)=>{
    
})

/**获取详情食评页，并提示跳转到食评详细页面
 *  1.5 GET /foodComment/#socialID
   * @param:socialID
   * @return:0/1/2
   * direct to「食评详情」页
 */
router.get('/#socialID', async(ctx, next)=>{
    
})

module.exports = router;