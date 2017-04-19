let router = require('koa-router')();
const sLooking = require('../services/ser_looking'),
  utils = require('../utils/utils')

/** 
   * 通过定位和条件获取寻食贴
   * 2.1 GET /looking/listByLocalAndCondition0
   * @param:local
   * @return:Looking
   */ 
router.get('/', async(ctx, next)=>{
    let params = ctx.request.body || {}
    let lookingList = await sLooking.ListLookingByLocalAndCondition(params)
    ctx.type = 'application/json'
    ctx.state = (lookingList == 2 && '500') || '200'
    ctx.body = lookingList
})

/**
 * 通过基础体的id获取寻食贴详细，并提示跳转到相应页面
 * * 2.2 GET /looking/#socialID
   * @param:socialId
   * direct to「寻食详情」页
 */
router.get('/:socialID', async(ctx, next)=>{
    let sid = ctx.params.socialID || {}
    let looking = await sLooking.LookingDetails(sid)
    ctx.type = 'application/json'
    ctx.state = (looking == 2 && '500') || '200'
    ctx.body = looking
})

/**
 * 抢来尝贴或者回答寻食贴
 *  2.3 POST /looking/beAVendor
   * @param:socialId;USER
   * @return:0/1/2
 */
router.post('/beAVendor', async(ctx, next)=>{
    let params = ctx.request.body || {}
    let socialID = params.sid || ''
    let user = params.user || {}
    let rs = await sLooking.AddVendor(socialID, user)
    ctx.type = 'application/json'
    ctx.state = (rs == 2 && '500') || '200'
    ctx.body = rs
})

module.exports = router;