var router = require('koa-router')()

/**
 * 痕迹管理，获取用户发出的食评
 * 4.1 GET /track/foodcomment/#userid
   * params:userid
   * return:myFCList
 */
router.get('/foodcomment', async(ctx, next)=>{

})

/** 痕迹管理，获取用户发布的寻食贴
 *  4.2 GET /track/looking/#userid
   * params:userid
   * return:myLookingList
 */
router.get('/looking', async(ctx, next)=>{
  
})


/**
 * 痕迹管理，获取用户发出的评论
 *  4.3 GET /track/postcomment/#userid
   * params:userid
   * return:myPCList
 */
router.get('/postcomment', async(ctx, next)=>{
  
})


/**
 * 痕迹管理，获取用户的点赞记录
 *  4.4 GET /track/like/#userid
   * params:userid
   * return:myLikeList
 */
router.get('/like', async(ctx, next)=>{
  
})


module.exports = router;