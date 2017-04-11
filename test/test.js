const sign_service = require('../services/ser_signinAndUp'),
    user_service = require('../services/ser_user')
const request = require('supertest-koa-agent');
const app = require('../app');
const assert = require('chai').assert

describe('SERVICE - SIGN',()=>{
    describe('#FindUser()',()=>{
        it('finduser without err', async ()=>{
            let a = await sign_service.FindUser('jennifer')
            assert.typeOf(a, 'Number')
            assert.equal(a, 1)
        })
    })

    describe('#signup',()=>[
        it('save user without err', async()=>{
            let a = await sign_service.Signup('jennifer', 'chenwutong')//已经存在数据库，所以会保存失败fails
            assert.typeOf(a, 'Number')
            assert.equal(a, 1)
        })
    ])

    describe('#signin',()=>[
        it('verify user without err', async()=>{
            let a = await sign_service.Signin('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    ])
})

describe('SERVICE - USER',()=>{
    describe('#Userinfo()', ()=>{
        it('find userinfo without err', async()=>{

        })
    })
})

describe('SERVICE - SHOP',()=>{
    describe('#Userinfo()', ()=>{
        it('find userinfo without err', async()=>{
            
        })
    })
})

describe('SERVICE - LOOKING',()=>{
    describe('#Userinfo()', ()=>{
        it('find userinfo without err', async()=>{
            
        })
    })
})

describe('SERVICE - FOODCOMMENT',()=>{
    describe('#Userinfo()', ()=>{
        it('find userinfo without err', async()=>{
            
        })
    })
})

describe('SERVICE - BASE',()=>{
    describe('#Userinfo()', ()=>{
        it('find userinfo without err', async()=>{
            
        })
    })
})






/*
describe('ROUTE - SIGN', ()=>{
    describe('#',()=>{
        it('', async()=>{
            request(app)
                // .post('/sign/up')
                .get('/user/lucien')
                // .send({
                //     useraccount:'jennifer',
                //     password:'221'
                // })
                .expect('Content-Type', /json/)
                //   .expect('Content-Length', '15')
                .expect(200)
                .end(function(err, res) {
                    console.log(res)
                    if (err) throw err;
                });
        })
    })
    describe('#')
})

*/