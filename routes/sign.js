const router = require('koa-router')();
const user_service = require('../services/ser_signinAndUp')
const utils = require('../utils/utils')

/**
 * * 0.1 get /signin: 
   * @param:username;password
   * @return:0/1/2
   */
router.post('/in', async(ctx, next)=>{
  //返回结果为0 1 2 
  let params = ctx.request.body
  let useraccount = params.useraccount
  let password = params.password
  Utils.cons('info', 'login:' + useraccount)
  let rs = await user_service.Signin
  ctx.type = 'application/json'
  ctx.state = (rs == 0 && '200') || ( rs == 1 && '200') || ( rs == 2 && '500')
  ctx.body = rs
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
  let rs = await user_service.Signup(useraccount, password) 
  ctx.type = 'application/json'
  ctx.state = (rs == 0 && '200') || ( rs == 1 && '200') || ( rs == 2 && '500')
  ctx.body = rs
})

module.exports = router;
