//let user pick from the three options 

let userScore = 0;
let computerScore = 0;

let userChoiceDisplay = document.getElementById('user-choice');
let computerChoice = document.getElementById('computer-choice');
let resultShown = document.getElementById('result');

// console.log(`${userChoice}`)

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

rock.addEventListener('click', () => {
    const userChoice = 'rock';
    userChoiceDisplay.innerHTML = "Rock";
    let choices = ['rock', 'paper', 'scissor'];
    let computerPicked = choices[Math.floor(Math.random() * 3)];
    computerChoice.innerHTML = computerPicked;

    if (userChoice === "rock" && computerPicked === "paper") {
        computerScore++;
        resultShown.innerHTML = "You lost.";
    }
    if (userChoice === "rock" && computerPicked === "scissor") {
        userScore++;
        resultShown.innerHTML = "You won!"; 
    }
    if (userChoice === "rock" && computerPicked === "rock") {
        resultShown.innerHTML = "Its a tie.";
    }
    updateScoreboard();
});

paper.addEventListener('click', () => {
    const userChoice = 'paper';
    userChoiceDisplay.innerHTML = "Paper";
    let choices = ['rock', 'paper', 'scissor'];
    let computerPicked = choices[Math.floor(Math.random() * 3)];
    computerChoice.innerHTML = computerPicked;

    if (userChoice === "paper" && computerPicked === "paper") {
        resultShown.innerHTML = "Its a tie.";
    }
    if (userChoice === "paper" && computerPicked === "scissor") {
        computerScore++;
        resultShown.innerHTML = "You lost.";
    }
    if (userChoice === "paper" && computerPicked === "rock") {
        userScore++;    
        resultShown.innerHTML = "You won!";
    }
    updateScoreboard();
});

scissor.addEventListener('click', () => {
    const userChoice = 'scissor';
    userChoiceDisplay.innerHTML = "Scissor";
    let choices = ['rock', 'paper', 'scissor'];
    let computerPicked = choices[Math.floor(Math.random() * 3)];
    computerChoice.innerHTML = computerPicked;

    if (userChoice === "scissor" && computerPicked === "paper") {
        userScore++;
        resultShown.innerHTML = "You won!";
    }
    if (userChoice === "scissor" && computerPicked === "scissor") {
        resultShown.innerHTML = "Its a tie.";
    }
    if (userChoice === "scissor" && computerPicked === "rock") {
        computerScore++;
        resultShown.innerHTML = "You lost.";
    }
    updateScoreboard();
});

function updateScoreboard() {
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;
}

// //when user clicks on an image the computer will display what the user choose
// // In the generator of whether user or computer picks one or another then there needs to be
// // a place where it can generate a random generator. 
// //then this will trigger the computer to generate its own choice
// // then it will decided on whether the user or computer won. And if there is a tie the computer will display a log box with a its a tie.
// // which  will then prompt the user to click ok. taking it back to the home page. 


// //display the users choice on screen


// //calculate the option for the computer
// //decide who won based on users choice and computer choice

// //inputs the answer
// //computer calculates an answer
// //results on who won?

//play again


//*******score board will mark place a tally mark on either computer or user board***

//This would be a container with a numbers generating on if the user won it would show. etc. 
//arrow on the right hand side

//create a variable one for computer or users score//