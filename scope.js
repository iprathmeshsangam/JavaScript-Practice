var c = 40;
// c is in global scope
let a = 100;
if(true){
    //this is blocked scope
    let a = 10
    const b = 20; 
    var c = 30;
    console.log("Inner : " , a);
}

console.log(a);
// console.log(b);
console.log(c); //value of c is changed 

//++++more on scope ++++++++++++


