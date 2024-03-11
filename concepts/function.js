//Practice functions and closures 

//Youtube link : https://www.youtube.com/watch?v=9ksqBa8_txM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=23&pp=iAQB

const brands = {
    brandName : "Zara",
    brandPrice  : 999,

    nameAndprice : function(){
       console.log(`${this.brandName} has a price range from  INR ${this.brandPrice} to INR 10,999 /-`); 
    }
}
//Window is an Object 
//this keyword is an object. 
//arrow function do not have reference THIS

// console.log(brands.nameAndprice());

const addTwo = (num1,num2)=>{
    return num1 + num2
}

//implicit return - Where you do not need explicitly mention return
//Note : when you have one line 
//if you are using curly braces you need to mention RETURN. if you are using brackets do not need to mention return

const addThree = (num1,num2) => num1 + num2;
// const usernameDisplay = (x,y)=>(({username : "prathmesh"}) + (x + y));
// console.log(usernameDisplay(3,2));
// console.log(addTwo(2,3));
// console.log(addThree(5,8));

//(IIFE)
//Immediately Invoked Function Expression 

//Youtube Link : https://www.youtube.com/watch?v=GAIbn16Iytc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=24&pp=iAQB

//this is called Named IIFE cause name of the function is myFunc
(function myFunc(){
    //Name IIFE
    console.log("DB connected");
})();

//this function will Immediately invoke as soon as it is executed



//this is an example of unnamed IIFE cause there is no name for the function
((name)=>console.log( "Hello, " + name))("DB is connected"); // prathmesh,Hello


//+++++++++++++++++++++++++++++++++++++
// global execution context
//THIS will return object depending on the execution environment, node or browsers

//--> Memory Creation phase 
//--> Execution Phase


