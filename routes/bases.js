let router = require('koa-router')();
  const sBase = require('../services/ser_base')

/**
 * 通过基本体的socialID 获取基本体的like属性列表
 * 1.13 GET /base/like/#socialID
 * @param:socialID
 * @return:likeList
 */
router.get('/like/:socialID', async(ctx, next)=>{
  let socialID = ctx.params.socialID || ''
  if(socialID){
    rs = await sBase.ListLike(socialID)
  }
  ctx.type = 'application/json'
  ctx.state = (rs == 2 && '500') || '200'
  ctx.body = rs
})

/**
  * 通过基本体的socialID 获取基本体的comment属性的列表
  * 1.14 GET /base/comment/#socialID
  * @param:socialID
  * @return:commentList
  */
router.get('/comment', async(ctx, next)=>{
  let socialID = ctx.params.socialID || ''
  if(socialID){
    rs = await sBase.ListComment(socialID)
  }
  ctx.type = 'application/json'
  ctx.state = (rs == 2 && '500') || '200'
  ctx.body = rs
})

module.exports = router;
