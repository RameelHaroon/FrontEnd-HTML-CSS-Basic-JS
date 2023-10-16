

let sum = 0
let isAlive =false
let blackJack = false

let cards = []
let msgEL = document.getElementById('message-el')
//let sumEL = document.getElementById('sum-el')
let sumEL = document.querySelector("#sum-el")
let cardEL = document.querySelector("#card-el")
let msg = ''

function StartGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    RenderGame()
}

function getRandomCard(){
    let number = Math.floor(Math.random() * 13) + 1

    if(number ===1){
        return 11
    }else if(number > 11){
        return 10
    }
    return number
}
function RenderGame(){

    if (sum <= 20) {
       msg = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
       msg ="Wohoo! You've got Blackjack! 🥳"
       blackJack = true
    } else {
        isAlive = false
        msg ="You're out of the game! 😭"
    }

    msgEL.textContent = msg
    sumEL.textContent = "Sum: " + sum
    //cardEL.textContent = "Cards: " + FirstCard + " and " + SecondCard
    renderCard()
}

function NewCard(){

    if(!isAlive || blackJack){

    }else{
        let card = getRandomCard()
        sum += card
        cards.push(card)
        RenderGame()
    }
    
}

function renderCard(){
    cardEL.textContent = "Cards: "
    for(let i=0;i<cards.length;i+=1){
        cardEL.textContent += cards[i] + " "
    }
}