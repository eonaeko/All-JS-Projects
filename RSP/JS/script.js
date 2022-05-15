const getRSPContainer = document.getElementById("RSP-container");
const getComputerChioce = document.getElementById("computer-chioce");
const getUserChioce = document.getElementById("user-chioce");
const winnerPara = document.getElementById("winner-para");
const getButton = document.querySelectorAll("button")
const getUserScore=  document.getElementById("user-score");
const getComputerScore = document.getElementById("computer-score");
const getWinnerAfterRound = document.getElementById("final-win");
let  userChioce;
let computerChioce;
let computerScore = JSON.parse(localStorage.getItem("computerscore"));
let userScore = JSON.parse(localStorage.getItem("userscore"));
const comScore =JSON.parse(localStorage.getItem("computerscore"));
const UScore =JSON.parse(localStorage.getItem("userscore"));

getComputerScore.innerHTML = comScore;
getUserScore.innerHTML =  UScore;
 
getWinnerAfterRound.style.display ="none";

getButton.forEach((evt) => {evt.addEventListener("click", e =>{
        getUserChioce.innerHTML = e.target.id;
        userChioce = e.target.id;
        computerTrueChoice()
        decideWinner()
        if((userScore === 10) || computerScore === 10){
            setTimeout(decideAfteraRound , 1000)
        }
        
    })
})


function computerTrueChoice(){

        let random = Math.ceil(Math.random() * 3)
        if(random === 1){
        computerChioce = "rock"
        }
        else if(random === 2){
            computerChioce = "scssiors"
        }
        else{
            computerChioce ="paper"
        }
        getComputerChioce.innerHTML = computerChioce;

}


function decideWinner(){

    if ((computerChioce ==="paper" && userChioce === "rock") || 
    (computerChioce === "scssiors" && userChioce==="paper") || 
    (computerChioce=== "rock" && userChioce ==="scssiors")){

    winnerPara.textContent = "Oops!! you lost try again";
    winnerPara.style.color ="red";
    computerScore++;
    getComputerScore.innerHTML = computerScore;
    JSON.stringify(localStorage.setItem("computerscore" , computerScore))
    return computerScore
    }

    else if ((computerChioce ==="rock" && userChioce=== "paper") || 
    (computerChioce=== "paper" && userChioce ==="scssiors") || 
    (computerChioce === "scssiors" && userChioce ==="rock")){
        winnerPara.textContent = "Congrations!! you win well done";
        winnerPara.style.color ="green";
        userScore++;
        getUserScore.innerHTML = userScore;
        JSON.stringify(localStorage.setItem("userscore" , userScore))
        return userScore
    }

    else{
        winnerPara.textContent = "Wonderful!! it is a draw";
        winnerPara.style.color ="yellow";

    }
   
} 
function decideAfteraRound(){
    getComputerChioce.innerHTML = "";
    getUserChioce.innerHTML=""
    getWinnerAfterRound.style.display ="block";
    getRSPContainer.style.display = "none"
    let you = "You";
    let computer = "Computer";
    let displayMessage ;
    if(computerScore  >= 10){
        displayMessage =`
         <div> The Winner of this round is  ${computer}</div>
         <button id="reset">Reset Game</button>
        `
    }
    else if(userScore >= 10){
        displayMessage =`
        <div>
        The Winner of this round is  ${you}</div>
        <button id="reset">Reset Game</button>
      `
    }
    getWinnerAfterRound.innerHTML= displayMessage;
        const getReset = document.getElementById("reset");
        getReset.addEventListener("click" , ()=>{
        getRSPContainer.style.display = "block"
        getWinnerAfterRound.style.display ="none";
        localStorage.clear()
       getComputerScore.innerHTML = comScore;
       getUserScore.innerHTML =  UScore;
        computerScore = 0
        userScore=0;

        winnerPara.textContent = "";

    })

    
}
