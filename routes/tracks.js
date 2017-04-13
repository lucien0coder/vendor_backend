let router = require('koa-router')()
const userService = require('../services/ser_user'),
  utils = require('../utils/utils')

/**
 * 痕迹管理，获取用户发出的食评
 * 4.1 GET /track/foodcomment/#useraccount
   * @param:useraccount
   * @return:myFCList
 */
router.get('/foodcomment/:useraccount', async(ctx, next)=>{
  let useraccount = ctx.params.useraccount || ''
  let fclist = await userService.listMyFC(useraccount)
  ctx.type = 'application/json'
  ctx.state = (fclist == 2 && '500') || '200'
  ctx.body = fclist
})

/** 痕迹管理，获取用户发布的寻食贴
 *  4.2 GET /track/looking/useraccount
   * @param:useraccount
   * @return:myLookingList
 */
router.get('/looking/:useraccount', async(ctx, next)=>{
  let useraccount = ctx.params.useraccount || ''
  let lookinglist = await userService.listMyLooking(useraccount)
  ctx.type = 'application/json'
  ctx.state = (lookinglist == 2 && '500') || '200'
  ctx.body = lookinglist
})


/**
 * 痕迹管理，获取用户发出的评论
 *  4.3 GET /track/postcomment/#userid
   * @param:userid
   * @return:myPCList
 */
router.get('/postcomment/:useraccount', async(ctx, next)=>{
  let useraccount = ctx.params.useraccount || ''
  let pclist = await userService.listMyPC(useraccount)
  ctx.type = 'application/json'
  ctx.state = (pclist == 2 && '500') || '200'
  ctx.body = pclist
})


/**
 * 痕迹管理，获取用户的点赞记录
 *  4.4 GET /track/like/:useraccount
   * @param:useraccount
   * @return:myLikeList
 */
router.get('/like/:useraccount', async(ctx, next)=>{
  let useraccount = ctx.params.useraccount || ''
  let likelist = await userService.listMyLike(useraccount)
  ctx.type = 'application/json'
  ctx.state = (likelist == 2 && '500') || '200'
  ctx.body = likelist
})


module.exports = router;