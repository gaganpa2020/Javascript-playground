let chai = require('chai');
let expect = chai.expect;
let addition = require("../modules/addition");

describe('addition', ()=>{

    it('it should add 2 numbers', (done)=>{
        addition.add(1 ,4 , function(result){
            expect(result).to.equal(5);
            done();            
        });
    });

});