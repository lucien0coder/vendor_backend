var router = require('koa-router')();

/** 
   * 通过定位和条件获取寻食贴
   * 2.1 GET /looking/listByLocalAndCondition
   * @param:local
   * @return:Looking
   */ 
router.get('/', async(ctx, next)=>{
     ctx.response.body = 'listLooking'
})

/**
 * 通过基础体的id获取寻食贴详细，并提示跳转到相应页面
 * * 2.2 GET /looking/#socialID
   * @param:socialId
   * direct to「寻食详情」页
 */
router.get('/#socialID', async(ctx, next)=>{

})

/**
 * 抢来尝贴或者回答寻食贴
 *  2.3 POST /looking/beAVendor
   * @param:socialId;USER
   * @return:0/1/2
 */
router.post('/beAVendor', async(ctx, next)=>{
    
})

module.exports = router;