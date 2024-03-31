//dom Element

let wordInput = document.querySelector("#word-input")
let currentWord = document.querySelector("#current-word")
let scoreDisplay = document.querySelector("#score")
let timeDisplay = document.querySelector("#time")
let message = document.querySelector("#message")
let time =5
let score=0

//array of words
const words= [ 
    "against",
    "administration",
    "antinomes",
    "antinomian",
    "geeks", 
    "generation", 
    "hospital",
    "agency",  
    "portal",
    "agreement", 
    "learn",
    "challenge",   
     "commercial",   
     "computer",
    "science", 
     "foreign",  
     "expert",   
     "fire", 
     "conference",
     "consumer",      
    "defense",  
    "important"
];

window.addEventListener("DOMContentLoaded",init)

function init(){
    showWords(words)
    wordInput.addEventListener("input",startMatch)
    setInterval(countdown,1000)
    setInterval(checkstatus,50)

}

function showWords(words){
    const randomIndex = Math.floor(Math.random()*words.length)
    currentWord.innerHTML =words[randomIndex]

}

function startMatch(){
  if(matchword()){
    showWords(words)
    wordInput.value =''
    message.innerHTML ="correct"
    score++;
    time=6;


    
  }else{
    message.innerHTML="incorrect!!!"
  }
  scoreDisplay.innerHTML=score
}

function matchword(){
    if(currentWord.innerHTML=== wordInput.value){
        return (true)

    }else{
        return(false)
    }
}
function countdown(){
  if(time>0)
  time--
  timeDisplay.innerHTML=time
}
function checkstatus(){
  if(time===0)
  message.innerHTML="GAME OVER!!!!!"
}
