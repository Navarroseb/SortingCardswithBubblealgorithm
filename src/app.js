/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  let symbols = ["diamond", "club", "heart", "spade"];
  let cardArr= [];

  function myCard() {
    cardArr = [];
    let Card = document.querySelector(".container");
    if (Card.childNodes.length !== 0) {
      Card.innerHTML = "";
    }
    let inputValueCards = parseInt(
      document.getElementById("numberusercards").value
    ); //estoy llamando y convirtiendo el valor del input que coloca el usuario en numero
    if (inputValueCards === 0) {
      alert("Coloca un numero mayor a 0");
    } else if (inputValueCards !== 0) {
      for (let i = 0; i < inputValueCards; i++) {
        let objElementsCard = {
          suits: suits[Math.floor(Math.random() * suits.length)],
          ranks: ranks[Math.floor(Math.random() * ranks.length)]
        };
        // objOfCards = objOfCards.concat(objElementsCard);
        objOfCards.push(objElementsCard);
      }

      if (myCard.childNodes.length === 0) {
        for (let element of objOfCards) {
          if (element.ranks === 1) {
            element.ranks = "A";
          }
          if (element.ranks === 11) {
            element.ranks = "J";
          }
          if (element.ranks === 12) {
            element.ranks = "Q";
          }
          if (element.ranks === 13) {
            element.ranks = "K";
          }
          let myDiv = document.createElement("div");
          let contentDiv = document.createTextNode(`${element.ranks}`);
          myDiv.className = `card ${element.suits}`;
          myDiv.appendChild(contentDiv);
          myCard.appendChild(myDiv);
        }
      }
    }
  }

  let buttondraw = document.querySelector(".draw")

    
  