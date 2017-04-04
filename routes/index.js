/**
 * * 0.1 POST /signin: 
   * params:username;password
   * return:0/1/2

 * 0.2 POST /signup:
   * params:useraccount;password;
   * return:0/1/2
 */
var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };

  // await ctx.render('index', {
  // });
  ctx.type = 'application/json'
  ctx.response.body = 'Hello Koa2'
})

router.get('/user', async (ctx, next)=>{
  ctx.response.body = 'Say hi from index user'
})

module.exports = router;
