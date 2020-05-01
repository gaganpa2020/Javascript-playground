let chai = require('chai');

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
        chai.expect("abc").to.be.a('string');
        chai.expect(null).to.be.null;
        chai.expect(10).which.is.a('number');
        chai.expect(obj).is.a.toString('object');
        chai.expect(obj).which.is.an('object').has.property('Name');
        chai.expect(obj).which.is.an('object').has.property('Name').is.a('string');
        chai.expect(obj).which.is.an('object').has.property('Age').is.a('number');
        chai.expect(obj).which.is.an('object').has.property('Name').is.a('string').to.be.equal('Aman');
        chai.expect(obj).not.have.a.property('Address');
        chai.expect(typeof(obj) == 'object').to.be.true;
        chai.expect(typeof(fun) == 'function').to.be.true;

        //chai.should
        
    });
});