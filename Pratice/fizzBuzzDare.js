 // Fizz Buzz dare 
function fbd(){
    for(let i=0; i <= 100;i++){

        if(i % 3 ==0){
            // print fizzz
            console.log("Fizz");
        }else if(i % 5 == 0){
            // print Buzz
            console.log("Buzz");
        }
        else(console.log(i));
    }
}

fbd();