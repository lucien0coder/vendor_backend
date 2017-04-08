// const signModal = require('../services/ser_signinAndUp'),
//     shopModal = require('../services/ser_shop'),
//     lookingModal = require('../services/ser_looking'),
//     foodComment = require('../services/ser_foodComment'),
//     utils = require('../utils/utils'),
//     indexRoute = require('../routes/index')

// signModal.signup('lucien','22222')
// utils.cons('info', 'Hello console!')

// indexRoute.cpmst
const request = require('supertest-koa-agent');
const app = require('../app');

request(app)
  .post('/sign/up')
  .send({
      useraccount:'lucien',
      password:'22121'
  })
  .expect('Content-Type', /json/)
//   .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    console.log(res)
    if (err) throw err;
  });