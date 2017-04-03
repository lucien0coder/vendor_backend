/* 3.1 POST /post/LOOKING
   * params:LOOKING
   * return:0/1/2

 * 3.2 POST /post/FOODCOMMENT
   * params:FOODCOMMENT
   * return:0/1/2

 * 3.3 POST /post/INVITING
   * params:INVITING
   * return:0/1/2

 * 1.10 POST /post/Comment/
   * params:COMMENT
   * return:0/1/2

 * 1.11 GET /post/like/#socialID
   * params:socialID;user
   * return:0/1/2

 * 1.12 GET /post/collect/#socialID
   * params:socialID;user
   * return:0/1/2
   */
  var router = require('koa-router')();
module.exports = router;