const ballons  = document.querySelectorAll(".ballon");
console.log(ballons);


const colors = ["#DFFF00","#FFBF00","#FF7F50","#DE3163" ,"#9FE2BF","#40E0D0","#6495ED","#FF00FF"];

//onload
window.onload = colorBallon();


function colorBallon(){
    for(let i = 0;i<ballons.length;i++){
        let random = Math.floor(Math.random()*colors.length);
        ballons[i].style.backgroundColor = colors[random];
    };
    
}

ballons.forEach((ballon)=>{
    ballon.addEventListener('mouseover',function(){
        if(!ballon.style.backgroundColor == "transparent"){
            ballon.classList.add('pop');
            ballon.classList.remove('ballon')
        }else{
            ballon.style.backgroundColor = "transparent";
            ballon.classList.add("pop");
            ballon.classList.remove('ballon');
        }
        
    });
    
});

// ballons[ballon].addEventListener('mouseover',function(){
//     if(!ballons[ballon].style.backgroundColor == "transparent"){
        
//         ballons[ballon].classList.add("pop");
//         ballons[ballon].classList.remove("ballon")
//     }else{
//         ballons[ballon].style.backgroundColor = "transparent";
//         ballons[ballon].classList.add("pop");
//         ballons[ballon].classList.remove("ballon")
//     }
    
// });
    


    
