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

const choicesList = document.querySelector("#choices");
let currentGame = 0;
let userWins = 0;
let machineWins = 0;
let ties = 0;

const playing = function(event){
    let choice = event.target;
    let machineGuess = machineInputGuess();
    const displayedMsg = document.querySelector('#displayedMsg');
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

    if(userWins === 5 || machineWins === 5){
        const winnerMsg = document.createElement('p');
        const displayedMsgLi = document.querySelector('#displayedMessages')

        if( userWins === 5){
            winnerMsg.textContent = "You are the winner!";
            displayedMsgLi.appendChild(winnerMsg);
        }
        else{
            winnerMsg.textContent = "The machine is the winner!";
            displayedMsgLi.appendChild(winnerMsg);
        }
        choicesList.removeEventListener('click', playing)
    }
}

choicesList.addEventListener("click", playing)