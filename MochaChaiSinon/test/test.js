'use strict';

let chai = require('chai');
let expect = chai.expect;
let should = chai.should();
let assert = chai.assert;

let obj  =  
{
    Name: 'Aman',
    Age: 30
};

const fun = function(){
    return 'hello world!';
};

describe("sample chai test", function(){
    it("case-1", function(){     
        //chai.expect
        expect("abc").to.be.a('string');
        expect(null).to.be.null;
        expect(10).which.is.a('number');
        expect(obj).is.a.toString('object');
        expect(obj).which.is.an('object').has.property('Name');
        expect(obj).which.is.an('object').has.property('Name').is.a('string');
        expect(obj).which.is.an('object').has.property('Age').is.a('number');
        expect(obj).which.is.an('object').has.property('Name').is.a('string').to.be.equal('Aman');
        expect(obj).not.have.a.property('Address');
        expect(typeof(obj) == 'object').to.be.true;
        expect(typeof(fun) == 'function').to.be.true;
    });

    it("case-2 - Uses of should", function(){        
        //chai.should
        ("abc").should.be.a('string');
        //"null".should.to.be.null;
        (10).should.be.a('number');
        obj.should.be.a.toString('object');
        (obj).should.be.an('object').has.property('Name');
        (obj).should.be.an('object').has.property('Name').is.a('string');
        (obj).should.be.an('object').has.property('Age').is.a('number');
        (obj).should.be.an('object').has.property('Name').is.a('string').to.be.equal('Aman');
        (obj).should.not.have.a.property('Address');
        (typeof(obj) == 'object').should.to.be.true;
        (typeof(fun) == 'function').should.to.be.true;
    });



    it("case-3 - Uses of assert", function(){        
        //chai.assert
        assert(10 === 10, "10 is not equal to 20");
        assert(true, "something is false");
        assert.isOk(true);

        let var1 = new fun();
        let var2 = new fun();
        
        ////assert.equal(var1, var2); //it will fail because equal cann't compare 2 object's property. 
        assert.deepEqual(var1, var2);

        assert.isObject({});
        assert.isObject(var1);

        assert.isString('');
        assert.isArray([]);


        
    });
});