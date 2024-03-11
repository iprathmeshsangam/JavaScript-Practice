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

// console.log(a);
// console.log(b);
// console.log(c); //value of c is changed 

//++++more on scope ++++++++++++
//nested scope




function one(){
    const username = "Prathmesh";
    

    function two(){
        //age has a blocked scope in function two you can only access age variable inside two() function
        const age = 27 ;

        console.log(username); // console log
    }
    //where as you can access username inside two() as will since the two() is inside a function named one() therefore username has a globle scope
    two();
    // console.log(age);
}

one();

