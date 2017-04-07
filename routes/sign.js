let router = require('koa-router')();
let user_service = require('../services/ser_signinAndUp')

// router.get('/', async function (ctx, next) {
// })

// router.get('/user', async (ctx, next)=>{
//   ctx.response.body = 'Say hi from index user'
// })

/**
 * * 0.1 get /signin: 
   * @param:username;password
   * @return:0/1/2
   */
router.get('/in', async(ctx, next)=>{
  ctx.state = {
    title: 'koa2 title'
  };

  // await ctx.render('index', {
  // });
  ctx.type = 'application/json'
  ctx.response.body = 'Hello Koa2'

})

 /** 0.2 POST /signup:
   * @param:useraccount;password;
   * @return:0/1/2
   */
router.get('/up', async(ctx, next)=>{
  console.log('into signup route')
  console.log(ctx.request.body)
  let useraccount = '';
  let password = '';
  // await user_service.signup(useraccount, password)
  ctx.body = 'get your info'
})

module.exports = router;
