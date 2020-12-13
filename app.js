
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const score_div = document.querySelector("score");
const result_div =  document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const actionMessage_p = document.getElementById("action-message");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*choices.length);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    return 'Scissors';
}

 
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(userChoice)} ${smallUserWord}  beats ${convertToWord(computerChoice)} ${smallCompWord}  - you won!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('green-glow')}, 300)
    if (userScore ===3){
        actionMessage_p.innerHTML = "You Are The Winner!";

    }
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();

    result_div.innerHTML = convertToWord(userChoice)+" "+smallUserWord+ " loses to " + convertToWord(computerChoice)+" "+smallCompWord + " - you lost!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('red-glow')}, 300)
    if (computerScore ===3){
        computerScore++;
        actionMessage_p.innerHTML = "You Lost!";

    }

}

function draw(userChoice, computerChoice){
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    computerScore++;

    result_div.innerHTML = convertToWord(userChoice)+" "+smallUserWord+ " equals " + convertToWord(computerChoice)+" "+smallCompWord + " - it's a draw!";
         document.getElementById(userChoice).classList.add('gray-glow');
         setTimeout(function(){ document.getElementById(userChoice).classList.remove('gray-glow')}, 300)
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;

    }



}

function main(){
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game('s'));
}
main();
