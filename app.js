const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const sign = require('./routes/sign');
const users = require('./routes/users');
const foodComments = require('./routes/foodComments')
const lookings = require('./routes/lookings')
const newPost = require('./routes/newPost')
const tracks = require('./routes/tracks')
const bases = require('./routes/bases')


// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'jade'
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// router.use('/', index.routes(), index.allowedMethods());
router.all('/',(ctx)=>{
  ctx.redirect('/sign/in')
})
router.use('/sign', sign.routes(), sign.allowedMethods())
router.use('/user', users.routes(), users.allowedMethods());
router.use('/foodcomment', foodComments.routes(), foodComments.allowedMethods());
router.use('/looking', lookings.routes(), lookings.allowedMethods());
router.use('/post', newPost.routes(), newPost.allowedMethods());
router.use('/track', tracks.routes(), tracks.allowedMethods());
router.use('/base', bases.routes(), bases.allowedMethods());

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});


module.exports = app;