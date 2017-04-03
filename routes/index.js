/**
 * signin signup
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
module.exports = router;
