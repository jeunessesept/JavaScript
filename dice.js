const Dice1 = Math.floor(Math.random()* 10) +1;
const Dice2 = Math.floor(Math.random()* 10) +1;
const Dice3 = Math.floor(Math.random()* 10) +1;

if (Dice1 === Dice2 || Dice1 === Dice3 || Dice2 === Dice3){
    console.log("two")

}

else if (Dice1 != Dice2 || Dice2!=Dice3){
    console.log("none")
}

console.log(Dice1, Dice2, Dice3)