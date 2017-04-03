
 /* 1.8 GET /users/#socialID
   * params:useraccount
   * return:0/1/2
   * direct to 「美食家详情」页

 * 5.2 GET /users/collection/#userid
   * params:userid
   * return:myCollectionList

 * 5.3 PUT /users/update
   * params:USER
   * return:0/1/2
   */
  
var router = require('koa-router')();
var uService = require('../services/ser_user')

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
});

router.get('/u',function(ctx, next){
  ctx.body = 'hello u! this is /u'
})

module.exports = router;
