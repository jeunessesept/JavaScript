// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   readline.question('what s the radius of your circle?', radius => {
//     console.log(`so the surface is ${(radius ** 2) * 3.14}cm`);
//     readline.close();
//   });

const prompt = require('prompt-sync')();

const rad = prompt ("what's the radius of your circle ?");
let surface = ((rad ** 2) * 3.14);

console.log(surface);


