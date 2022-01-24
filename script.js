document.addEventListener('DOMContentLoaded',() => {
    // card option
    const cardArray=[
        {
            name:"fries",
            img:"images/fries.png"
        },
        {
            name:"fries",
            img:"images/fries.png"
        },
        {
            name:"burgur",
            img:"images/burgur.jpg"
        },
        {
            name:"burgur",
            img:"images/burgur.jpg"
        },
        {
            name:"hodog",
            img:"images/hodog.png"
        },
        {
            name:"hodog",
            img:"images/hodog.png"
        },
        {
            name:"icecream",
            img:"images/icecream.png"
        },
        {
            name:"icecream",
            img:"images/icecream.png"
        },
        {
            name:"milkshake",
            img:"images/milkshake.png"
        },
        {
            name:"milkshake",
            img:"images/milkshake.png"
        },
        {
            name:"pizza",
            img:"images/pizza.png"
        },
        {
            name:"pizza",
            img:"images/pizza.png"
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid=document.querySelector('.grid')
    const resultDisplay=document.querySelector('#result')
    cardsChosen=[]
    cardChosenId=[]
    cardsWon=[]

    // create your board
    function createBoard(){
        for(i=0;i<cardArray.length;i++){
            var card=document.createElement('img')
            card.setAttribute('src','images/blank1.jpg')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    // check for match
    function checkForMatch(){
        var cards=document.querySelectorAll('img')
        const optionOneId=cardChosenId[0]
        const optionTwoId=cardChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src','images/blank.jpg')
            cards[optionTwoId].setAttribute('src','images/blank.jpg')
            cards[optionOneId].removeEventListener('click',flipCard)
            cards[optionTwoId].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
        }
        else{
            cards[optionOneId].setAttribute('src','images/blank1.jpg')
            cards[optionTwoId].setAttribute('src','images/blank1.jpg')
            alert('sorry, try again')
        }
        cardsChosen=[]
        cardChosenId=[]
        resultDisplay.textContent=cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent="Congratulations! You Win"
        }
    }



    // flip your card
    function flipCard(){
        var cardId=this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if(cardsChosen.length ==2){
            setTimeout(checkForMatch,500)
        }
    }

    createBoard()

})