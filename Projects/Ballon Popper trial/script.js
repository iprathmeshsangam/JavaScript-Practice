

let popped = 0;


document.addEventListener('mouseover' ,function(e){
    if(e.target.className === "ballon"){
        e.target.style.backgroundColor = "#19172e";
        e.target.textContent = "🎈";
        popped++
        createBallons();
    }
    checkPopped();
});


function checkPopped(){
    let ballongal = document.querySelector(".ballon-Gallery");
    if(popped == ballongal.lenght || popped ==20){
        console.log("All ballons are popped");
        let message = document.querySelector(".no-Ballons");
        message.style.display = "block";
        let ballonGallery = document.querySelector('.ballon-Gallery');
        ballonGallery.innerHTML = "";
    }
}


function createBallons(){
    let ballon = document.createElement("div");
    let ballongal = document.querySelector(".ballon-Gallery");
    ballon.setAttribute("class" , "ballon");
    ballongal.append(ballon);
}
