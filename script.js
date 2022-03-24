document.addEventListener('DOMContentLoaded',() => {
    // card option
    const cardArray=[
        {
            name:"ship",
            img:"images/ship.jpg"
        },
        {
            name:"ship",
            img:"images/ship.jpg"
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
            name:"queen",
            img:"images/queen.jpg"
        },
        {
            name:"queen",
            img:"images/queen.jpg"
        },
        {
            name:"elephent",
            img:"images/elephent.jpg"
        },
        {
            name:"elephent",
            img:"images/elephent.jpg"
        },
        {
            name:"milkshake",
            img:"images/milkshake.jpg"
        },
        {
            name:"milkshake",
            img:"images/milkshake.jpg"
        },
        {
            name:"cap",
            img:"images/cap.jpg"
        },
        {
            name:"cap",
            img:"images/cap.jpg"
        },
        {
            name:"ballon",
            img:"images/ballon.jpg"
        },
        {
            name:"ballon",
            img:"images/ballon.jpg"
        },
        {
            name:"plane",
            img:"images/plane.jpg"
        },
        {
            name:"plane",
            img:"images/plane.jpg"
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid=document.querySelector('.grid')
    const resultDisplay=document.querySelector('#result')
    let chances=document.querySelector('#chances')
    const soundbtn=document.querySelector('#sound')

    var wrongSond = new Audio('sounds/wrong.mp3');
    var winSond = new Audio('sounds/win.wav');
    var gamewinSond = new Audio('sounds/gamewin.wav');
    var loseSond = new Audio('sounds/lose.wav');

    cardsChosen=[]
    cardChosenId=[]
    cardsWon=[]
    remainds=6
    chances.textContent=remainds;

    // create your board
    function createBoard(){
        for(i=0;i<cardArray.length;i++){
            var card=document.createElement('img')
            card.setAttribute('src','images/quest.jpg')
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
            //alert('You found a match')
            winSond.play();
            cards[optionOneId].setAttribute('src','images/blank.jpg')
            cards[optionTwoId].setAttribute('src','images/blank.jpg')
            cards[optionOneId].removeEventListener('click',flipCard)
            cards[optionTwoId].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
        }
        else{
            cards[optionOneId].setAttribute('src','images/quest.jpg')
            cards[optionTwoId].setAttribute('src','images/quest.jpg')
            //alert('sorry, try again')
            remainds--
            wrongSond.play();

        }
        cardsChosen=[]
        cardChosenId=[]
        resultDisplay.textContent=cardsWon.length
        chances.textContent=remainds;
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent="Congratulations! You Win"
            gamewinSond.play()
        }
        gameLose()
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

    // check game lose
    function gameLose(){
        if(remainds==0){
            images=document.querySelectorAll('.grid img')
            images.forEach(element => {
                element.removeEventListener('click',flipCard)
            });
            resultDisplay.textContent="Lol, You Lose! Try again"
            loseSond.play();
        }
    }

    tryAgain.addEventListener('click',function(){
        document.location.reload()
    })

    soundbtn.addEventListener('click',function(){
        if(this.classList.contains('fa-volume-up')){
            this.classList.remove('fa-volume-up')
            this.classList.add('fa-volume-off')
            wrongSond.volume = 0.0;
            winSond.volume = 0.0;
            gamewinSond.volume = 0.0;
            loseSond.volume = 0.0;

        }
        else if(this.classList.contains('fa-volume-off')){
            this.classList.remove('fa-volume-off')
            this.classList.add('fa-volume-up')
            wrongSond.volume = 1.0;
            winSond.volume = 1.0;
            gamewinSond.volume = 1.0;
            loseSond.volume = 1.0;

        }
    })

    createBoard()

})