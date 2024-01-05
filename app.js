let userScore=0;
let compScore=0;
let choices= document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let youScore=document.querySelector("#you-score");
let compScore1=document.querySelector("#comp-score");
const draw=()=>{
    msg.innerText="draw";
};
const winner=(userwin)=>{
    if(userwin){
        userScore++;
         msg.innerText=`you win 🍬`;
        youScore.innerText=userScore;
    }
    else{
        compScore++;
        msg.innerText=`you lose!`;
        compScore1.innerText=compScore;
    }
   
};
const genCompChoice=()=>{
    const arr=["rock","paper","scissor"];
    const randomNUm= Math.floor(Math.random() *3);
    return arr[randomNUm];
}
const playGame=(userChoice)=>{
    const compChoice= genCompChoice();
    console.log("you selected",userChoice);
    console.log("comp selected",compChoice);
    if(userChoice===compChoice){
        draw();
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin= compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
            userwin= compChoice==="rock" ? true :false;
        }
        else{
            userwin= compChoice==="rock"? false:true;
        }
        winner(userwin);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
