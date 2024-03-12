
const ballonContainer = document.getElementById("ballonContainer");
const ballons  = document.querySelectorAll(".ballon");
console.log(ballons);


const colors = ["#DFFF00","#FFBF00","#FF7F50","#DE3163" ,"#9FE2BF","#40E0D0","#6495ED","#FF00FF"];

//onload
window.onload = colorBallon();
let createBallon = document.createElement("div");
console.log(createBallon);
createBallon.classList.add('ballon');
ballonContainer.append(createBallon);


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
            ballon.classList.remove('ballon');
        }else{
            ballon.style.backgroundColor = "transparent";
            ballon.classList.add("pop");
            ballon.classList.remove('ballon');
        }

        
    });
    
});




    
