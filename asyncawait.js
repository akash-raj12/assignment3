
function abc(){
return new Promise((resolve,reject)=>{
resolve("all right");

})

}
async function name(value){
    console.log("hi"+value);
    
var a=await abc();


console.log(a);


}
name("akash");