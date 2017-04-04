var router = require('koa-router')();

/* 2.1 GET /looking/listByLocalAndCondition
   * params:local
   * return:Looking
   */ 
router.get('/', async(ctx, next)=>{
     ctx.response.body = 'listLooking'
})

/**
 * * 2.2 GET /looking/#socialID
   * params:socialId
   * direct to「寻食详情」页
 */
router.get('/#socialID', async(ctx, next)=>{

})

/**
 *  2.3 POST /looking/beAVendor/#socialID/USER(temporary)
   * params:socialId;USER
   * return:0/1/2
 */
router.post('/beAVendor', async(ctx, next)=>{
    
})

module.exports = router;