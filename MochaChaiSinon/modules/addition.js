let add = function(x, y, callback){
    console.log("value of x: " + x + " and value of y: " + y);
    callback(x + y);    
}

exports.add = add;