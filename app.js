let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

let highScore=0;
let highest=document.getElementById("Highest");

document.addEventListener("keypress",(event)=>{
    if(started==false){
    console.log("Game Started");
    started=true;
    }


    levelup();
}
)


function gameflash(btn){

    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){

    btn.classList.add("userflash");

    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}


function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
//random button


let randomIdx=Math.floor(Math.random()*4);
let randomColor=btns[randomIdx];


gameSeq.push(randomColor);
console.log(gameSeq);


let randomBtn=document.querySelector(`.${randomColor}`);


    gameflash(randomBtn);
}


let buttons=document.querySelectorAll(".btn");

for(button of buttons){
    button.addEventListener("click",btnpressed);
}


function checkAns(idx){
     if(gameSeq[idx]==userSeq[idx]){
    if(gameSeq.length==userSeq.length){
        setTimeout(levelup,1000);
    }
     }
     else{
    h2.innerHTML=`Game over, YOUR SCORE IS <b>${level}</b><br>press again any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(()=>{
       document.querySelector("body").style.backgroundColor="white"; 
    },500)
   
    reset();
}
}


function btnpressed(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}



function reset(){
    if(highScore<level)
        highScore=level;
     highest.innerText=`Your Highest score : ${highScore}`;
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}