const router = require('koa-router')(),
  uService = require('../services/ser_user'),
  utils = require('../utils/utils')

/**
 * 1.8 GET /user/useraccount
   * @param:useraccount
   * @return:0/1/2
   * direct to 「美食家详情」页
 */
router.get('/:useraccount', async(ctx, next)=>{
  let useraccount = ctx.params.useraccount
  utils.cons('info','user/'+useraccount)
  ctx.type = 'application/json'
  ctx.body = await uService.userinfo(useraccount)
})

/**
 *  5.2 GET /user/collection/useraccount
   * @param:userid
   * @return:myCollectionList
 */
router.get('/collection/:useraccount', async(ctx, next)=>{
  let useraccount = ctx.params.useraccount
  let list = await uService.myCollection(useraccount)
  utils.cons('info','user/collection/'+useraccount)
  ctx.type = 'application/json'
  ctx.state = (list==1 && '200') || (list==2 && '500') 
  ctx.body = list
})

/**
 *  5.3 PUT /user/update
   * @param:USER
   * @return:0/1/2
 */
router.put('/update', async(ctx, next)=>{
  let user = ctx.request.body
  let r = await uService.updateMyInfo(user)
  ctx.type = 'application/json'
  ctx.state = (r==0 && '200') || (r==1 && '200') || (r==2 && '500')
  ctx.body = r
})


module.exports = router;
