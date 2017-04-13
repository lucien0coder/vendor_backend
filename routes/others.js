let router = require('koa-router')();
const sService = require('../services/ser_shop'),
  utils = require('../utils/utils')

/**
 * 1.6 GET /getLocation
   * gps 
 */
router.get('/getLocation', async(ctx, next)=>{

})

/**
 * 1.7 GET /selectLocation
   * @return:0/1/2
   * direct to 「地点切换」
 */
router.get('/selectLocation', async(ctx, next)=>{
    
})

/**
 * 1.9 GET /shop/#socialID
   * @param:shopId
   * @return:0/1/2   
   * direct to 「店铺详情」页
 */
router.get('/shop/:socialID', async(ctx, next)=>{
  let socialID = ctx.params.socialID || ''
  let shop = await sService.shopinfo(socialID)
  ctx.type = 'application/json'
  ctx.state = (shop == 2 && '500') || '200'
  ctx.body = shop
})



module.exports = router;