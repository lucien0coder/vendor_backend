/* 2.1 GET /looking/listByLocalAndCondition
   * params:local
   * return:Looking

 * 2.2 GET /looking/#socialID
   * params:socialId
   * direct to「寻食详情」页

 * 2.3 POST /looking/beAVendor/#socialID/USER(temporary)
   * params:socialId;USER
   * return:0/1/2
   */ 
  var router = require('koa-router')();
module.exports = router;