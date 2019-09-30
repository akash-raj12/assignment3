var async=require("async");
async.auto({

one:function(callback){
setTimeout(()=>{
console.log("one");
callback(null,1)
},2000)
},
two:function(callback){
console.log("two");
callback(null,2)
},
three:['two','one',function(arg1,callback){

console.log("akash is a good boy");

callback(null,7)

}]
},function(err,result){
console.log(result);
})