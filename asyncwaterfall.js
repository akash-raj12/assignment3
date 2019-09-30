console.log('Program Start');

var async = require('async');
async.waterfall([
    function (callback) {
        console.log('start');
        callback(null, 1, 2);
    },
    function (arg1, arg2, callback) {
        console.log(`${arg1+arg2}`);
        callback(null, 3,4);
    },
    function (arg3,arg4, callback) {
        console.log(`${arg3 + arg4}`);
        callback(null, 'final result');
    }
], function (err, result) {
   
    try{

        console.log(result);
        
    }
    catch(err){
        console.log("error");
        
    }

});
