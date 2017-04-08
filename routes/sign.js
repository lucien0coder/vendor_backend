const router = require('koa-router')();
const user_service = require('../services/ser_signinAndUp')
const utils = require('../utils/utils')

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
router.post('/up', async(ctx, next)=>{
  utils.cons('info','into signup route')
  let params = ctx.request.body;
  let useraccount = params.useraccount || '';
  let password = params.password || '';
  let result ={ 
    data : await user_service.signup(useraccount, password) 
  }
  ctx.type = 'application/json'
  if(result.data == 2){
    ctx.state = '500'
  }else{
    ctx.state = '200'
  }
  ctx.body = result
})

module.exports = router;
