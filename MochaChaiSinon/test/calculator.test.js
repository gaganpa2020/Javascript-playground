let chai = require('chai');
let expect = chai.expect;
let sinon = require('sinon');
let calculator = require('../modules/calculator');
let addition = require("../modules/addition");

describe('calculator', ()=>{
    
    it('it should calculator 2 numbers', (done)=>{
        calculator.cal(1 ,4 , function(result){
            expect(result).to.equal(5);
            done();            
        });
    });

    it('it should calculator 2 numbers - with mocking', (done)=>{
        
        let add = sinon.stub(addition, "add");
        add.withArgs(sinon.match.any, sinon.match.any).yields(5);
    
        calculator.cal(1 ,4 , function(result){
            expect(result).to.equal(5);
            done();            
        });
    });

});