
/*callback*/
function akash(a,callback){
    callback(a);
}
akash(80,student);
function student(value){
    console.log(`akash roll no. is: ${value}`)
}



/*callback hell*/
function one(value,callback){
     callback(value+2,false);
 }
 function two(value,callback){
     callback(value+2,false)
 }
 function three(value,callback){
     callback(value+2,false);

 }
 one(2,function(firstresult,err){
    if(!err){
        two(2,function(secondresult,err){
            if(!err){
                three(2,function(threeresult,err){
                     if(!err){
                         console.log(threeresult);
     }
 });
             }
         });

 }
 });