const prompt = require('prompt-sync')();

const fullTarif = 10
const reduceTarif = 8

age = prompt ("how old are you ?")

if (age > 12){
     tarif = "for you it's "+ fullTarif + " €";

}

else if ( age <= 12){
     tarif = "for you it's "+ reduceTarif + " €";
}

console.log(tarif)