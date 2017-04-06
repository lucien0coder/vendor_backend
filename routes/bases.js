var router = require('koa-router')();

/**
 * 通过基本体的socialID 获取基本体的like属性列表
 * 1.13 GET /base/like/#socialID
 * @param:socialID
 * @return:likeList
 */
router.get('/like', async(ctx, next)=>{

})

/**
  * 通过基本体的socialID 获取基本体的comment属性的列表
  * 1.14 GET /base/comment/#socialID
  * @param:socialID
  * @return:commentList
  */
router.get('/comment', async(ctx, next)=>{

})

module.exports = router;
