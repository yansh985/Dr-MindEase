const card = document.querySelectorAll(".card");
const easy = document.querySelector(".level .easy");
const hard = document.querySelector(".hard");

const level = document.querySelector(".level");
const playAgain = document.querySelector(".playAgain");
const cards = document.querySelector(".cards");
const header = document.querySelector("header");

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;


function init() {
    document.querySelector('body').style.display = 'flex';
}

function flipCard(e) {
    clickedCard = e.target;
    if (cardOne !== clickedCard.parentElement && !disableDeck) {
        flipChance--;
        chance = document.querySelector(".chance");
        chance.innerText = `${flipChance} `;
        if (flipChance < 1) {
            setTimeout(() => {
                cardDeck = document.querySelector(".cards");
                cardDeck.style.display = 'none';
                winner = document.querySelector("header h1");
                winner.innerHTML = '<span>You lose</span>';
                header.classList.remove("hide");
                playAgain.classList.remove("hide");
            }, 1200);
            playAgain.addEventListener('click', newGameAgain);
        }


        clickedCard.parentElement.classList.remove('flip');
        clickedCard.parentElement.nextElementSibling.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard.parentElement.nextElementSibling;
        }
        if (!cardTwo) {
            cardTwo = clickedCard.parentElement.nextElementSibling;
        }
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".gem img").src,
            cardTwoImg = cardTwo.querySelector(".gem img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matched++;
        if (matched == 8) {
            setTimeout(() => {
                cardDeck = document.querySelector(".cards");
                cardDeck.style.display = 'none';
                winner = document.querySelector("header h1");
                winner.innerHTML = '<span>You win</span>';


                header.classList.remove("hide");
                playAgain.classList.remove("hide");

            }, 1200);
            playAgain.addEventListener('click', newGameAgain);
        }
        cardOne.parentElement.removeEventListener("click", flipCard);
        cardTwo.parentElement.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne.previousElementSibling.classList.add("flip");
        cardTwo.previousElementSibling.classList.add("flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);  // arr.sort(() => Math.random() - 0.5);
    card.forEach((card, i) => {
        // card.classList.remove("flip");
        const imgTag = card.querySelector(".gem img");
imgTag.src = imgPaths[i];
        card.addEventListener("click", flipCard);
    });
}


card.forEach(card => {
    card.addEventListener("click", flipCard);
});
const newGameAgain = () => {
    window.location.reload();
}
function startNewGame() {
    return window.location.reload();
}

function Game() {
    easy.addEventListener('click', () => {
        flipChance = Infinity;
        level.classList.add("hide");
        cards.classList.remove("hide");
        shuffleCard();
    });
    hard.addEventListener('click', () => {
        flipChance = 30;
        level.classList.add("hide");
        cards.classList.remove("hide");
        header.classList.remove("hide");
        shuffleCard();
    });
}

Game();
