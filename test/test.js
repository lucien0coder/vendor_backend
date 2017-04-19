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
    describe('#/sign/in',()=>{
        it('user sign in without err', async()=>{
            request(app)
                .post('/sign/in')
                .send({
                    useraccount:'jennifer',
                    password:'221'
                })
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res)=>{
                    if (err) throw err
                    console.log(res)
                });
        })
    })

    describe('#/sign/up',()=>{
        it('user sign up without err', async()=>{
            request(app)
                .post('/sign/up')
                .send({
                    useraccount:'jennifer',
                    password:'221'
                })
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        })
    })
})

//-----------------------------------------------SIGN -- route ----------------------------
describe('#user-route', ()=>{
    describe('#/user/useraccoun', ()=>{
        it('get user by useraccount without err', async()=>{
            request(app)
                .get('/user/lucien')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        } )
    })

    describe('#/collection/useraccount', ()=>{
        it('get user collection by useraccount without err', async()=>{
            request(app)
                .get('/user/lucien')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        } )
    })

    describe('#/user/update', ()=>{
        it('put user update without err', async()=>{
            request(app)
                .put('/user/updatet')
                .send({
                    useraccount:'jennifer',
                    password:'221'
                })
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        } )
    })
})

//-----------------------------------------------TRACK -- route ----------------------------
describe('#/track-route', ()=>{
    describe('#/track/foodcomment/#useraccount', ()=>{
        it('get user by useraccount without err', async()=>{
            request(app)
                .get('/user/lucien')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        } )
    })

    describe('#/track/looking/useraccount', ()=>{
        it('get user collection by useraccount without err', async()=>{
            request(app)
                .get('/track/looking/lucien')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        } )
    })

    describe('#/track/postcomment/#userid', ()=>{
        it('put user update without err', async()=>{
            request(app)
                .get('/track/postcomment/lucien')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        } )
    })

    describe('#/track/like/:useraccount', ()=>{
        it('put user update without err', async()=>{
            request(app)
                .get('/track/like/lucien')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        } )
    })
})

//-----------------------------------------------OTHERS -- route ----------------------------
describe('#/others-route', ()=>{
    describe('#/shop/:socialID', ()=>{
        it('get user by useraccount without err', async()=>{
            request(app)
                .get('/shop/588888545552133366')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        } )
    })
})

//-----------------------------------------------OTHERS -- route ----------------------------
describe('#/others-route', ()=>{
    describe('#/shop/:socialID', ()=>{
        it('get user by useraccount without err', async()=>{
            request(app)
                .get('/shop/588888545552133366')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        } )
    })
})

//-----------------------------------------------BASE -- route ----------------------------
describe('#/base-route', ()=>{
    describe('#/like/:socialID', ()=>{
        it('get user by useraccount without err', async()=>{
            request(app)
                .get('/like/588888545552133366')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        } )
    })

    describe('#/comment/:socialID', ()=>{
        it('get user by useraccount without err', async()=>{
            request(app)
                .get('/comment/588888545552133366')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        } )
    })
})

//-----------------------------------------------FOODCOMMENT -- route ----------------------------
describe('#/foodcomment-route', ()=>{
    describe('#/foodComment/listByLocalAndCondition', ()=>{
        it('get user by useraccount without err', async()=>{
            request(app)
                .get('/foodComment/listByLocalAndCondition')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        })
    })

    describe('#/foodComment/listByUserCollectionAndCondition', ()=>{
        it('get user by useraccount without err', async()=>{
            request(app)
                .get('/foodComment/listByUserCollectionAndCondition')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, resq)=>{
                    if(err) throw err
                    console.log(res)
                })
        })
    })

    describe('#/foodComment/img/#foodCommentId', ()=>{
        it('get user by useraccount without err', async()=>{
            request(app)
                .get('/comment/588888545552133366')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        })
    })

    describe('#/foodComment/#socialID', ()=>{
        it('get user by useraccount without err', async()=>{
            request(app)
                .get('/comment/588888545552133366')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        })
    })
})

//-----------------------------------------------LOOKING -- route ----------------------------
describe('#/looking-route', ()=>{
    describe('#/looking', ()=>{
        it('get user by useraccount without err', async()=>{
            request(app)
                .get('/looking')
                .send({

                })
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        })
    })

    describe('#/foodComment/listByUserCollectionAndCondition', ()=>{
        it('get user by useraccount without err', async()=>{
            request(app)
                .get('/foodComment/listByUserCollectionAndCondition')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, resq)=>{
                    if(err) throw err
                    console.log(res)
                })
        })
    })

    describe('#/foodComment/img/#foodCommentId', ()=>{
        it('get user by useraccount without err', async()=>{
            request(app)
                .get('/comment/588888545552133366')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err, res)=>{
                    if(err) throw err
                    console.log(res)
                })
        })
    })
})