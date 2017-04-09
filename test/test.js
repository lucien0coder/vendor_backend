const sign_service = require('../services/ser_signinAndUp')
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

// describe('ROUTE - GETUSER', ()=>{
    
// })