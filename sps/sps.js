
let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");



const gencompchoice = () =>{
    const options=["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("It was a Drawgame");
    msg.innerText="Game was Draw,play again";
    msg.style.backgroundColor = "#081b37"
     
}

const showWinner =(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("youwin");
        msg.innerText = `Youwin!!,your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
}
        else{
            compscore++;
            compscorepara.innerText = compscore;
            console.log("you lose");
            msg.innerText = `you lost!!,${compchoice}beats your${userchoice}`;
            msg.style.backgroundColor = "red";
        }
    }

const playgame =(userchoice) =>{
    console.log("userchoice =",userchoice);
    const compchoice = gencompchoice();
    console.log("compchoice= ",compchoice);

    if(userchoice === compchoice){
        drawGame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
           userwin= compchoice==="paper" ? false : true ;
        }else if(userchoice === "paper"){ 
            userwin = compchoice ==="scissors"?false:true; 
        }else {
            userwin = compchoice === "paper"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userchoice= choice.getAttribute("id");
        console.log(userchoice);
        playgame(userchoice);

    });
});