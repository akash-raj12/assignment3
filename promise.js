

function f1(){
    return new Promise(function(resolve,reject){
       setTimeout(() => {

     const error = false;
     if (!error){
         console.log("your function has resolve")
         resolve("thanks akash");
     }   
        else{
            console.log("your function has rejected")
            reject("akash");
        }   
       },2000); 
        
        
        
    })
}
f1().then(function(res){
    console.log(res + " it is resolved");
}).catch(function(err){
    console.log("it is rejected"+err);
})