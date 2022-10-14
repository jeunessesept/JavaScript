// Exercise 1 - Number Guesser
// Make a program that generates an integer between 1 and 100 (don't display it to the user).

// Then the program should display "Guess the number" and ask the user to guess. If the user enters a number which is too low it should display "Too low" 
// and re-ask the question. 
// If the user enters a number 
// which is too high it should display "Too high" and re-ask the question. 
// If the user guess correctly it should display "Well guessed!" and exit.

const prompt = require('prompt-sync')();

let  inNum = prompt("guess the number from 1 to 1OO!");

 
let num = Math.floor(Math.random()* 100)+1;


if (inNum > num){
    console.log("too high")
} else if (inNum < num){
    console.log("too low")
} 

else if (inNum === num){
    console.log("well guessed")
}



