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
    if(machineGuess === 1){
        return "rock";
    }
    else if(machineGuess === 2){
        return "paper";
    }
    else{
        return "scissors"
    }
}

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

    currentGamePara = document.createElement('p')

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
            
            currentGameli.textContent = `User wins: ${userWins}`

            
            console.log("User wins: " + userWins);
            console.log("Machine wins: " + machineWins);
            console.log("Number of ties: " + ties);
        }
    
    } 
    for(let i = 0; i<=4; i++){
        playRound();
    }
}

const choicesList = document.querySelector("#choices");

choicesList.addEventListener("click", (event) => {

    let choice = event.target;
    let machineGuess = machineInputGuess();
    const displayedMsg = document.querySelector('#displayedMsg');
    let currentGame = 0;
    let userWins = 0;
    let machineWins = 0;
    let ties = 0;
    const currentGameLi = document.querySelector('#currentGame'); 
    const userWinsLi = document.querySelector('#userWins');
    const machineWinsLi = document.querySelector('#machineWins');
    const tiesLi = document.querySelector('#ties');

    switch(choice.id){
        case machineGuess:
            displayedMsg.textContent = "It's a tie!";
            ties +=1;
            break;

        case 'rock':
            if((machineGuess === "scissors")){
                displayedMsg.textContent = "You win!";
                userWins += 1;
            }
            else{
                displayedMsg.textContent = "The machine wins :(";
                machineWins += 1;
            }
            break;
        
        case 'paper':
            if((machineGuess === "rock")){
                displayedMsg.textContent = "You win!";
                userWins += 1;
            }
            else{
                displayedMsg.textContent = "The machine wins :(";
                machineWins += 1;
            }
            break;
            
        case 'scissors':
            if((machineGuess === "paper")){
                displayedMsg.textContent = "You win!"
                userWins += 1;
            }
            else{
                displayedMsg.textContent = "The machine wins :("
                machineWins += 1;
            }
            break;
    }
    currentGame += 1

    currentGameLi.textContent = `Game number ${currentGame}`;
    userWinsLi.textContent = `User's wins: ${userWins}`;
    machineWinsLi.textContent = `Machine's wins: ${machineWins}`;
    tiesLi.textContent = `Number of ties: ${ties}`;

})