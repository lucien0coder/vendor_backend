const sign_service = require('../../services/ser_signinAndUp')
const should = require('should');

describe('sign',()=>{
    describe('#FindUser()',()=>{
        it('finduser without err', async (done)=>{
            let a = sign_service.FindUser('jennifer')
            console.log(a)
            done()
        })
    })

    // describe('#signup',()=>[
    //     it('save user without err', (done)=>{
    //         sign_service.Signup('jennifer', 'chenwutong')
    //     })
    // ])
})