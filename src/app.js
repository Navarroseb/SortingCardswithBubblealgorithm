/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!"); */

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomsymbol());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};
let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexnumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexnumbers];
};

let generateRandomsymbol = () => {
  let symbols = ["diamond", "club", "heart", "spade"];

  let indexsymbols = Math.floor(Math.random() * symbols.length);
  return symbols[indexsymbols];
};

let array = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(array));
