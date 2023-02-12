let firstCard = Math.floor(Math.random()*13) + 1
let secondCard = Math.floor(Math.random()*13) + 1
let sum = firstCard + secondCard
let gameStarted = false;
// let showGameStatus = document.querySelectorAll(".firstLevel")[0]
let notifyEl = document.getElementById("notify-el")
let notify = ""
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

let firstCardImage = "/images/cardno-" + firstCard+ ".png"
let secondCardImage = "/images/cardno-" + secondCard+ ".png"

let cards = [firstCardImage, secondCardImage]

function startGame(){
    
    if(sum<21){
        gameStarted=true;
        // document.getElementById("game-Btn").innerHTML = "Start New Game"
        // document.getElementById("game-Btn").style.visibility = "hidden"
        renderResult()
    }
    else{
        window.location.reload();
    }
    
    // drw=1;
    // let Drawgame= document.getElementsByClassName("newDraw");
    // drawNewCard.innerHTML="";

    
}

function renderResult(){
    for(let i=0; i<cards.length; i++){
    document.getElementsByClassName("display-card")[i].setAttribute("src", cards[i])
    }
    sumEl.textContent = "Sum: " + sum
    if(sum < 21){
        notify = "Do you want to draw a new card?"
    }else if (sum === 21){
        notify = "You've got Blackjack!"
    }else{
        notify = "You're out of the game!"
    }

    notifyEl.innerHTML = notify
    
}

function drawNewCard(){
    if(sum<21 && gameStarted==true){
        let newCard = Math.floor(Math.random()*13) + 1
        let drawCard = "/images/cardno-" + newCard+ ".png"
        cards.push(drawCard)
        sum = sum + newCard
        sumEl.textContent = "Sum: " + sum
        renderResult()
        
    }
    
}

// function showButton(){
//     if(gameStarted==false){
        
//     }
// }