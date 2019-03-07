/* 1. adım */
const cards = document.querySelectorAll('.memory-card');
let flipSes = new Audio('ses/dew_drops.mp3');
let dogruSes = new Audio('ses/bell.mp3');
let yanlisSes = new Audio('ses/knock_knock.mp3');
/*4. adım */
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


/* 3. adım */
function flipCard(){
    /* console.log("clicked");
    console.log(this);  */
    /* 4. adımda aşağıdaki toggle ı değiştirdim  */
    /* this.classList.toggle('flip'); */
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    flipSes.play();
    /* 4. adım devam */
    if(!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
       return;
    }
        //second click
        hasFlippedCard = false;
        secondCard = this;
        /* console.log({firstCard, secondCard}); */
        // do cards match?
        checkForMatch();
   }



function checkForMatch(){
        /*
        iki card ı karşılaştırmak için html de çok kulanışlı bir attribute var data attr
        html ye bunu eklediğimizde buradan js kodu içinden karşılaştırma yapabiliriz
        data-* şeklinde kullanımı var
        */
       /* console.log(firstCard.dataset.framework);
       console.log(secondCard.dataset.framework); */

       let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        isMatch ? disableCards() : unflipCards();
       }


function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    dogruSes.play();
}

function unflipCards(){
    /* not matching */
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        yanlisSes.play();
        /* lockBoard = false; */
        resetBoard();
    }, 1500); 
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;
    });
})();


/* 2. adım */
cards.forEach(card => card.addEventListener('click', flipCard));