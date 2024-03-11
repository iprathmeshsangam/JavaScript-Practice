//Git repo
//Tutorial Link : https://www.youtube.com/watch?v=X7hDBhd_L5U&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=6
//

//NUMBER CONVERSION
let score = 18; // This is Number

console.log(score);

score = "19abc";
let scoreIsNumber = Number(score);

console.log(typeof score);
console.log(scoreIsNumber); // will show NaN 
console.log(typeof scoreIsNumber); // but type of data will show Number

let score1 = undefined; 

console.log(score1); // undefined 
console.log(typeof score1); //undefined 


//BOOL
let score3 = 0;
let changeIntoBoolean = Boolean(score3);

console.log(changeIntoBoolean);
console.log(typeof changeIntoBoolean); // --- > False




//"10" => 10
// "33abc " => NaN
// true => 1 ; false => 0;
// "" => false 
//"Prathmesh" => true


//STRING CONVERSION// 

let someNumber = 33; 

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);



//********************Operations****************** */

let str = "hello"
let str1 = " Hitesh"
console.log(str + str1);

console.log("2" + 1); // 21 

console.log("2" + 1 + 1); //211

console.log(1 + 1 + "2");  //22

console.log(3 + 4 + 10 % "x"); //NaN

