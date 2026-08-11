 
 const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0
}

 function playGame(guess){
const randomNumber= Math.random();

const result = randomNumber < 0.5 ? 'heads' : 'tails';


 console.log(guess ===result ? 'You Win' : 'You Lose')


if (guess === result) {
    score.wins++;
    
} else {
    score.losses++;
}

localStorage.setItem('score', JSON.stringify(score))
 console.log(score)
 }