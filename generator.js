function *generator(){
let num=1;
while(true){

    yield num;
    num++;
}

}

var a=generator();
for(var i=0;i<10;i++){
console.log(a.next().value);
}