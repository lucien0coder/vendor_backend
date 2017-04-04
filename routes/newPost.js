var router = require('koa-router')();

/**
 * 3.1 POST /post/LOOKING
   * params:LOOKING
   * return:0/1/2
 */
router.post('/looking', async(ctx, next)=>{

})

/**
 * 3.2 POST /post/FOODCOMMENT
   * params:FOODCOMMENT
   * return:0/1/2
 */
router.post('/foodcomment', async(ctx, next)=>{
    
})

/**
 * 3.3 POST /post/INVITING
   * params:INVITING
   * return:0/1/2
 */
router.post('/inviting', async(ctx, next)=>{
    
})

/**
 * 1.10 POST /post/Comment/
   * params:COMMENT
   * return:0/1/2
 */
router.post('/comment', async(ctx, next)=>{
    
})

/**
 * 1.11 GET /post/like/#socialID
   * params:socialID;user
   * return:0/1/2
 */
router.get('/like', async(ctx, next)=>{
    
})

/**
 *  1.12 GET /post/collect/#socialID
   * params:socialID;user
   * return:0/1/2
 */
router.get('/collect', async(ctx, next)=>{
    
})

module.exports = router;