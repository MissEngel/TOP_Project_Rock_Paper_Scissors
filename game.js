//create function that asks for user input guess and returns it
function userInputGuess(){
    userGuess = prompt("Choose your pick: rock, paper or scissors").toLowerCase();

    while(userGuess != "rock" && userGuess != "scissors" && userGuess != "paper"){
        userGuess = prompt("Choose a valid option: 'rock', 'paper' or 'scissors'");
    }
}

//create function that returns machine guess
function machineInputGuess(){
    machineGuess = Math.floor(Math.random() * 3) + 1;
    console.log(machineGuess)
    if(machineGuess === 1){
        machineGuess = "rock";
    }
    else if(machineGuess === 2){
        machineGuess = "paper";
    }
    else{
        machineGuess = "scissors"
    }
}

//create variable for user guess
let userGuess;

//create variable for machine guess
let machineGuess;

playGame();

function playGame(){
    //create variable to keep playing with a boolean value of true
    let keepPlaying = true;

    //create variable for current game number
    let currentGame = 0;

    //create variable for user wins counter
    let userWins = 0;

    //create variable for machine wins counter
    let machineWins = 0;

    //create variable for ties counter
    let ties = 0;

    function playRound(){
        while(keepPlaying){
        
            currentGame += 1;
            console.log("Game number: " + currentGame);
        
            machineInputGuess();
            userInputGuess();

            if(userGuess === machineGuess){
                console.log("It's a tie!");
                ties += 1;
            }
            else if((userGuess === "rock" && machineGuess === "scissors") || (userGuess === "paper" && machineGuess === "rock") || (userGuess === "scissors" && machineGuess === "paper")){
                console.log("User wins!");
                userWins += 1;
            }
            else{
                console.log("The machine wins :(");
                machineWins += 1;
            }
        
            console.log("User wins: " + userWins);
            console.log("Machine wins: " + machineWins);
            console.log("Number of ties: " + ties);
        }
    
    } 
    for(let i = 0; i<=4; i++){
        playRound();
    }
}

