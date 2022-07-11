let player = 
{
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let winnings = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("your-score-el")
let cardsEl = document.getElementById("your-cards-el")
let playerEl = document.getElementById("player-el")
let winningsEl = document.getElementById("winnings-el")

playerEl.textContent = player.name + ": $" + player.chips
winningsEl.textContent = "Winnings: $" + winnings

function getRandomCard() 
{
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    
    if (randomNumber > 10) 
    {
        return 10
    } 
    
    else if (randomNumber === 1) 
    {
        return 11
    } 
    
    else 
    {
        return randomNumber
    }
}

function startGame() 
{
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    player.chips = player.chips - 1
    playerEl.textContent = player.name + ": $" + player.chips
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    
    for (let i = 0; i < cards.length; i++) 
    {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) 
    {
        message = "Do you want to draw a new card?"
    } 
    
    else if (sum === 21) {
        message = "You've got Blackjack!"
        player.chips = player.chips + winnings
        playerEl.textContent = player.name + ": $" + player.chips
        winnings = 0
        winningsEl.textContent = "Winnings: $" + winnings 
        hasBlackJack = true
    } 
    
    else 
    {
        message = "You're out of the game!"
        winnings = 0
        winningsEl.textContent = "Winnings: $" + winnings
        isAlive = false    
    }

    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) 
    {        
        winnings = winnings + 1000
        winningsEl.textContent = "Winnings: $" + winnings
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
