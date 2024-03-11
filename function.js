//Practice functions and closures 

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