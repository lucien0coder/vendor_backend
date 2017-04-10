const router = require('koa-router')(),
  uService = require('../services/ser_user'),
  utils = require('../utils/utils')


router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
});

/**
 * 1.8 GET /users/#socialID
   * @param:useraccount
   * @return:0/1/2
   * direct to 「美食家详情」页
 */
router.get('/:useraccount', async(ctx, next)=>{
  let useraccount = ctx.params.useraccount
  utils.cons('info','user/'+useraccount)
  ctx.type = 'application/json'
  ctx.body = await uService.userinfo(useraccount)
  ctx.body = useraccount
})

/**
 *  5.2 GET /users/collection/#userid
   * @param:userid
   * @return:myCollectionList
 */
router.get('/collection/#userid', async(ctx, next)=>{
  
})

/**
 *  5.3 PUT /users/update
   * @param:USER
   * @return:0/1/2
 */
router.put('/update', async(ctx, next)=>{
  
})


module.exports = router;
