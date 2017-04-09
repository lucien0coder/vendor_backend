const sign_service = require('../services/ser_signinAndUp')
const request = require('supertest-koa-agent');
const app = require('../app');
const should = require('should');

describe('SERVICE - SIGN',()=>{
    describe('#FindUser()',()=>{
        it('finduser without err', async ()=>{
            let a = await sign_service.FindUser('jennifer')
            console.log(a)
        })
    })

    // describe('#signup',()=>[
    //     it('save user without err', (done)=>{
    //         sign_service.Signup('jennifer', 'chenwutong')
    //     })
    // ])
})

describe('ROUTE - GETUSER', ()=>{
    describe('#',()=>{
        it('', async()=>{
            request(app)
                // .post('/sign/up')
                .get('/sign/up')
                .send({
                    useraccount:'jennifer',
                    password:'221'
                })
                .expect('Content-Type', /json/)
                //   .expect('Content-Length', '15')
                .expect(200)
                .end(function(err, res) {
                    console.log(res)
                    if (err) throw err;
                });
        })
    })
})