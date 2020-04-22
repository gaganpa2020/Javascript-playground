let addition = require('./addition');

let printLog = function(print){
    if(print){
        console.log('Print - Jay');
    }else   {
        console.log('Print - Vinay');
    }
}

let cal = function(x, y, callback){
    console.log("2 numbers: " + x + "," + y);
    //console.log("$2 numbers: {0}, {1}",x, y);

    printLog(true);

    addition.add(x , y, function(result){
        console.log("Result: " + result);
        callback(result);
    });
}

exports.cal=cal;