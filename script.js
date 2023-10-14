
const strike= document.getElementById("strike");
const reset = document.getElementById("reset");
// team India
const IndiaScore = document.getElementById("score-IND")
const IndiaWickets = document.getElementById("wickets-IND");

// Team PAK

const PakScore = document.getElementById("score-PAK");
const PakWickets = document.getElementById("wickets-PAK")

let Team1Scores = 0
let Team2Scores = 0
let Team1Wickets = 0
let Team2Wickets = 0
let Turn =1
let Team1BallsFaced = 0
let Team2BallsFaced = 0

 const PossibleOutcomes = [0,1,2,3,4,6,"W"]

 const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer")
const StrikeAudio = new Audio ("http://bit.ly/so-ball-hit")

 function GameOver(){
    gameOverAudio.play();  
    if(Team1Scores>Team2Scores){

        alert("Team India Wins")
    }
    else if(Team1Scores<Team2Scores){
        alert("Team Pak Wins")
    }

    else if (Team1Scores===Team2Scores){
        alert("It is another SuperOver")
    }
 }

function UpdateScores(){
    IndiaScore.textContent= Team1Scores;
    PakScore.textContent= Team2Scores;

    IndiaWickets.textContent= Team1Wickets
    PakWickets.textContent = Team2Wickets
}

reset.onclick=()=>{
    window.location.reload()
}

strike.onclick=()=>{
    StrikeAudio.pause()
    StrikeAudio.currentTime= 0
    StrikeAudio.play()


const randomElement = PossibleOutcomes[Math.floor(Math.random() * PossibleOutcomes.length)];
console.log(randomElement)


if (Turn === 2) {

Team2BallsFaced++;

document.querySelector(`#pak div:nth-child(${Team2BallsFaced})`).textContent = randomElement;

if (randomElement === "W") {
  Team2Wickets++;
}

else {
  Team2Scores += randomElement;
}

if (
  Team2BallsFaced === 6 ||
  Team2Wickets === 2 ||
 Team2Scores > Team1Scores
) {
  Turn = 3;
  GameOver();
}
}

if (Turn === 1) {
    Team1BallsFaced++;
    document.querySelector(`#ind div:nth-child(${Team1BallsFaced})`).textContent = randomElement;
    if (randomElement === "W") {
        Team1Wickets++;
    } else {
        Team1Scores += randomElement;
    }
    if (Team1BallsFaced === 6 || Team1Wickets === 2) Turn = 2;
}
UpdateScores();
}