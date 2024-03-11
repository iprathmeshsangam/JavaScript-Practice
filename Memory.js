//Memory in js 
//Stack and Heap 
/*
    Primitives are store in Stack 
    Non-Primitive are store in Heap 
*/


let user = "prathmesh";

let userTwo = user;

userTwo = "Sangam";


console.log(userTwo); // Sangam
console.log(user); // prathmesh

//since userTwo has a primitive data type it will be stored in stack memory
// A copy of its original value will still remain the same 

let cars = {
    color : "red",
    model : "SUV"
}
// console.log(cars);
cars.color = "black"
console.log(cars); // color : black , model : SUV

//since Cars is an object and non-primitive data type the original value 
//will be changed too