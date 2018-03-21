//Element nodes
const buttons = document.getElementsByClassName('btn-choice');
const playerScoreText = document.getElementById('playerScoreText');
const computerScoreText = document.getElementById('computerScoreText');

//Event Listeners
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(event){
        
        let playerChoice = event.currentTarget.getAttribute('data-option');
        //console.log(playerChoice);
        playRound(playerChoice);
    });
}


//Variables for the game
const choices = ['Rock','Paper','Scissors'];
var playerScore = 0;
var computerScore = 0;
const winningScore = 10;


//Play a round of Rock, Paper, Scissors
function playRound(playerChoice) {
    //console.log(playerChoice);
    
    let randomIndex = Math.floor( Math.random()*choices.length);
    var computerChoice = choices[randomIndex];
    //console.log(computerChoice);
    if(playerChoice== computerChoice){
        console.log('It was a tie');
        return;
    };
    if(playerChoice =='Scissors'){
        if(computerChoice == 'Paper'){
            playerScore++;
            playerScoreText.innerHTML = playerScore;
            console.log('Player won');
        }else if(computerChoice=='Rock'){
            computerScore++;
            computerScoreText.innerHTML = computerScore;
            console.log('Computer won');
        }
    }

    if(playerScore == winningScore || computerScore == winningScore){
        gameOver(playerScore,computerScore);
    }
}

//Update the text between the scores with the result of the round and with what each player played
function resultText() {
    
}


//Reset scores and text elements to 0
function resetGame() {
    
}


//Alert the player whether they won or not after someone reaches 10 points
function gameOver(playerScore,computerScore) {
    if(playerScore>computerScore){
        alert("Dearest human, you have won the game and bested the computers, Play again?");
    }else{
        alert("Our deepest condolences, but you did not win this round, would you like to try again?");
    }
    resetGame();
}