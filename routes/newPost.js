let router = require('koa-router')();
const sLooking = require('../services/ser_looking'),
  sFoodComment = require('../services/ser_foodComment'),
  sBase = require('../services/ser_base'),
  sUser = require('../services/ser_user'),
  utils = require('../utils/utils')

/**
 * 3.1 POST /post/LOOKING
   * params:LOOKING
   * return:0/1/2
 */
router.post('/looking', async(ctx, next)=>{
    let looking = ctx.request.body || {}
    let rs = 1
    if(looking.date){
      rs = await sLooking.saveLooking(looking)
    }
    ctx.type = 'application/json'
    ctx.state = (rs == 2 && '500') || '200'
    ctx.body = rs
})

/**
 * 3.2 POST /post/FOODCOMMENT
   * params:FOODCOMMENT
   * return:0/1/2
 */
router.post('/foodcomment', async(ctx, next)=>{
  let foodComment = ctx.request.body || {}
  let rs = 1
  if(foodComment.date){
    rs = await sFoodComment.SaveFoodComment(foodComment)
  }
  ctx.type = 'application/json'
  ctx.state = (rs == 2 && '500') || '200'
  ctx.body = rs
})

/**
 * 3.3 POST /post/INVITING
   * params:INVITING
   * return:0/1/2
 */
router.post('/inviting', async(ctx, next)=>{
    //shop
})

/**
 * 1.10 POST /post/Comment/
   * @param:COMMENT
   * @return:0/1/2
 */
router.post('/comment', async(ctx, next)=>{
  let rs = 1
  let params = ctx.request.body
  let comment = params.comment || ''
  let socialID = params.socialID || ''
  let userid = params.userid || ''
  if(comment && socialID && userid){
    rs = await sBase.SaveComment(comment, socialID, userid)
  }
  ctx.type = 'application/json'
  ctx.state = (rs == 2 && '500') || '200'
  ctx.body = rs
})

/**
 * 1.11 GET /post/like/#socialID
   * @param:socialID; //被赞对象id
   * @param:userid//点赞用户
   * @return:0/1/2
 */
router.get('/like', async(ctx, next)=>{
  let rs = 1
  let params = ctx.request.body
  let socialID = params.socialID || ''
  let userid = params.userid || ''
  if(socialID && userid){
    rs = await sBase.SaveLike(userid, socialID)
  }
  ctx.type = 'application/json'
  ctx.state = (rs == 2 && '500') || '200'
  ctx.body = rs
})

/**
 *  1.12 GET /post/collect/#socialID
   * @param:socialID //收集的对象
   * @param:user //发起收集的用户
   * @param:type //收集对象的类型
   * @return:0/1/2
 */
router.get('/collect', async(ctx, next)=>{
  let rs = 1
  let params = ctx.request.body
  let socialID = params.socialID || ''
  let userid = params.userid || ''
  let type = params.type || ''
  if(socialID && userid && type){
    rs = await sUser.addCollection(userid, type, socialID)
  }
  ctx.type = 'application/json'
  ctx.state = (rs == 2 && '500') || '200'
  ctx.body = rs
})

module.exports = router;