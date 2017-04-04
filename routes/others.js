var router = require('koa-router')();

/**
 * 1.6 GET /getLocation
   * gps 
 */
router.get('/getLocation', async(ctx, next)=>{

})

/**
 * 1.7 GET /selectLocation
   * return:0/1/2
   * direct to 「地点切换」
 */
router.get('/selectLocation', async(ctx, next)=>{
    
})

/**
 * 1.9 GET /shop/#socialID
   * params:shopId
   * return:0/1/2   
   * direct to 「店铺详情」页
 */
router.get('/shop', async(ctx, next)=>{
    
})



module.exports = router;