
//create variable to keep playing with a boolean value of true
let keepPlaying = true;

//create function that asks for user input guess and returns it
function userInputGuess(){
    userGuess = prompt("Choose your pick: rock, paper or scissors");

    while(userGuess != "rock" && userGuess != "scissors" && userGuess != "paper"){
        userGuess = prompt("Choose a valid option: 'rock', 'paper' or 'scissors'");
    }
}

//create function that returns machine guess
function machineInputGuess(){
    machineGuess = Math.floor(Math.random() * 3) + 1;
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


//create while loop that will keep running keep playing variable
// === n

//create variable for user guess
let userGuess;

//create variable for machine guess
let machineGuess;

//create variable for current game number
let currentGame = 0;

//create variable for user wins counter
let userWins = 0;

//create variable for machine wins counter
let machineWins = 0;

//create variable for ties counter
let ties = 0;

while(keepPlaying){
    
    currentGame += 1;
    console.log("Game number: " + currentGame)

    machineInputGuess();
    userInputGuess();
    //if user guess equals machine guess then output "it's a tie!"
    //ties variable += 1

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

    let decision = prompt("Do you want to play again? Type: 'yes' or 'no'");

    while(decision != "yes" && decision != "no"){
        decision = prompt("Choose a valid option: 'yes' or 'no'");
    }

    if(decision === "no"){
        keepPlaying = false;
    }   
}

//if user guess equals rock and machine guess equals scissors
//then output "User wins!"

//if user guess equals scissors and machine guess equals paper
//then output "User wins!"

//if user guess equals paper and machine guess equals rock
//then output "User wins!"

//else then output "The machine wins :("

//output "User wins: userWins"

//output "Machine wins: machineWins"

//output "Number of ties: ties"

//ask the user if he wants to play again or not, he must mark
//"y" or "n" to indicate so

//if input equals n, keepPlaying variable will equal to false

