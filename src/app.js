/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let symbols = ["♥", "♠", "♦", "♣"];

let listOfCards = document.querySelector("#cardList");
let sortedCardList = document.querySelector("#sortedCardList");
let input = document.querySelector("#numberOfCards");
let botonDraw = document.querySelector("#botonDraw");
let botonSort = document.querySelector("#botonSort");
let cardList = [];

window.onload = function() {
  generateNewCards();
  sortCards();
};

function generateNewCards() {
  let numberOfCards = "";
  botonDraw.addEventListener("click", event => {
    numberOfCards = input.value;
    listOfCards.innerHTML = "";
    sortedCardList.innerHTML = "";
    cardList = [];
    let creatediv = document.createElement("div");
    for (let i = 0; i < numberOfCards; i++) {
      let ghostcard = getCard();
      cardList.push(ghostcard);
      drawCard(ghostcard, listOfCards, creatediv);
    }
    console.log(cardList);
  });
}

function randomElement(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
function getCard() {
  let cardAux = {
    symbol: "",
    number: ""
  };
  cardAux.symbol = randomElement(symbols);
  cardAux.number = randomElement(numbers);
  return cardAux;
}
function drawCard(a, b, c) {
  let top = document.createElement("div");
  let center = document.createElement("div");
  let bottom = document.createElement("div");
  let card = document.createElement("div");

  top.id = "top";
  top.classList.add("top");
  top.innerHTML = a.symbol;

  center.id = "center";
  center.classList.add("center");
  if (a.number != 1 && a.number != 11 && a.number != 12 && a.number != 13) {
    center.innerHTML = a.number;
  }
  if (a.number == 1) {
    center.innerHTML = "A";
  }
  if (a.number == 11) {
    center.innerHTML = "J";
  }
  if (a.number == 12) {
    center.innerHTML = "Q";
  }
  if (a.number == 13) {
    center.innerHTML = "K";
  }

  bottom.id = "bottom";
  bottom.classList.add("bottom");
  bottom.innerHTML = a.symbol;
  bottom.style.color = a.color;
  if (bottom.innerHTML == "♥" || bottom.innerHTML == "♦") {
    top.style.color = "red";
    bottom.style.color = "red";
  }
  card.id = "card";
  card.appendChild(top);
  card.appendChild(center);
  card.appendChild(bottom);
  c.classList.add("row");
  c.appendChild(card);
  b.appendChild(c);
}
function drawCards(myArray, i) {
  let creatediv = document.createElement("div");
  creatediv.innerHTML = i;
  for (let i = 0; i < cardList.length; i++) {
    drawCard(myArray[i], sortedCardList, creatediv);
  }
}
function sortCards() {
  botonSort.addEventListener("click", event => {
    sortedCardList.innerHTML = "";
    sortedCardList.innerHTML = "Sorted Cards";
    bubbleSort(cardList);
  });
}
function bubbleSort(arr) {
  let wall = arr.length - 1;
  let counter = 0;
  while (wall > 0) {
    let i = 0;
    while (i < wall) {
      if (arr[i].number > arr[i + 1].number) {
        let aux = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = aux;
        drawCards(cardList, counter);
        counter++;
      }

      i++;
    }
    wall--;
  }
  console.log(arr);
  return arr;
}
