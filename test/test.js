const sign_service = require('../services/ser_signinAndUp'),
    user_service = require('../services/ser_user'),
    shop_service = require('../services/ser_shop'),
    looking_service = require('../services/ser_looking'),
    foodcomment_service = require('../services/ser_foodComment'),
    base_service = require('../services/ser_base'),
    request = require('supertest-koa-agent'),
    assert = require('chai').assert,
    app = require('../app')

//-----------------------------------------------SIGN -- service ----------------------------
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

//-----------------------------------------------USER -- service ----------------------------
describe('SERVICE - USER',()=>{
    describe('#Userinfo()', ()=>{
        it('find userinfo without err', async()=>{
            let a = await user_service.userinfo('lucien')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

     describe('#updateMyInfo()', ()=>{
        it('find updateMyInfo without err', async()=>{
            let a = await user_service.updateMyInfo('lucien')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

     describe('#myInfo()', ()=>{
        it('find myInfo without err', async()=>{
            let a = await user_service.myInfo('lucien')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

     describe('#myCollection()', ()=>{
        it('find myCollection without err', async()=>{
            let a = await user_service.myCollection('lucien')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

     describe('#listMyPC()', ()=>{
        it('find listMyPC without err', async()=>{
            let a = await user_service.listMyPC('lucien')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

    describe('#listMyLooking()', ()=>{
        it('find listMyLooking without err', async()=>{
            let a = await user_service.listMyLooking('lucien')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

    describe('#listMyLike()', ()=>{
        it('find listMyLike without err', async()=>{
            let a = await user_service.listMyLike('lucien')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

    describe('#listMyFC()', ()=>{
        it('find listMyFC without err', async()=>{
            let a = await user_service.listMyFC('lucien')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

    describe('#addCollection()', ()=>{
        it('find addCollection without err', async()=>{
            let a = await user_service.addCollection('lucien')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })
})

//-----------------------------------------------SHOP -- service ----------------------------
describe('SERVICE - SHOP',()=>{
    describe('#SaveInviting()', ()=>{
        it('find SaveInviting without err', async()=>{
             let a = await shop_service.SaveInviting('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

     describe('#Shopinfo()', ()=>{
        it('find Shopinfo without err', async()=>{
             let a = await shop_service.Shopinfo('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })
})

//-----------------------------------------------LOOKING -- service ----------------------------
describe('SERVICE - LOOKING',()=>{
    describe('#SaveLooking()', ()=>{
        it('find SaveLooking without err', async()=>{
            let a = await looking_service.SaveLooking('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

     describe('#LookingDetails()', ()=>{
        it('find LookingDetails without err', async()=>{
            let a = await looking_service.LookingDetails('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

     describe('#ListLookingByLocalAndCondition()', ()=>{
        it('find ListLookingByLocalAndCondition without err', async()=>{
            let a = await looking_service.ListLookingByLocalAndCondition('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

     describe('#AddVendor()', ()=>{
        it('find AddVendor without err', async()=>{
            let a = await looking_service.AddVendor('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })
})

//-----------------------------------------------FOODCOMMENT -- service ----------------------------
describe('SERVICE - FOODCOMMENT',()=>{
    describe('#ViewFoodCommentImg()', ()=>{
        it('find ViewFoodCommentImg without err', async()=>{
             let a = await foodcomment_service.ViewFoodCommentImg('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

    describe('#SaveFoodComment()', ()=>{
        it('find SaveFoodComment without err', async()=>{
             let a = await foodcomment_service.SaveFoodComment('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

    describe('#ListUserCollectionAndCondition()', ()=>{
        it('find ListUserCollectionAndCondition without err', async()=>{
             let a = await foodcomment_service.ListUserCollectionAndCondition('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

    describe('#ListFoodCommentByLocalAndCondition()', ()=>{
        it('find ListFoodCommentByLocalAndCondition without err', async()=>{
             let a = await foodcomment_service.ListFoodCommentByLocalAndCondition('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

    describe('#ListFCComment()', ()=>{
        it('find ListFCComment without err', async()=>{
             let a = await foodcomment_service.ListFCComment('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })
})

//-----------------------------------------------BASE -- service ----------------------------
describe('SERVICE - BASE',()=>{
    describe('#ListComment()', ()=>{
        it('find ListComment without err', async()=>{
             let a = await base_service.ListComment('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

    describe('#ListLike()', ()=>{
        it('find ListLike without err', async()=>{
             let a = await base_service.ListLike('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

    describe('#SaveComment()', ()=>{
        it('find SaveComment without err', async()=>{
             let a = await base_service.SaveComment('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })

    describe('#SaveLike()', ()=>{
        it('find SaveLike without err', async()=>{
             let a = await base_service.SaveLike('jennifer', 'chenwutong')
            assert.typeOf(a, 'Number')
            assert.equal(a, 0)
        })
    })
})

//-----------------------------------------------SIGN -- route ----------------------------
describe('ROUTE - SIGN', ()=>{
    describe('#',()=>{
        it('', async()=>{
            request(app)
                .post('/sign/up')
                // .get('/user/lucien')
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
    // describe('#')
})

//-----------------------------------------------SIGN -- route ----------------------------