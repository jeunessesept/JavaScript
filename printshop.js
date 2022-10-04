const prompt = require('prompt-sync')();

const copy = prompt("how much copy do you need ?");

if (copy <= 10){
   price = 0.12;
}

else if (copy <=20 ){
    price = 0.11;
}

else if (copy >30){
    price = 0.10;
}

let totalPrice = price * copy; 

console.log(totalPrice, "€")

