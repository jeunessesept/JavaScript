/// **** the numbers from 1 to n

const prompt = require('prompt-sync')();

const num = prompt("type a number :");


    // const num = 50;   without prompt*****

for (let i = 0; i<num; i++){
        console.log(i)
}


/// ****the numbers from 1 to n in descending order

let N = 60;

function ReverseOrder (N) { 
    for (let i = N; i > 0; i --){
        console.log(i);
    }
}

console.log(ReverseOrder(N))


/// ****the numbers from -n to n

var C = -50; 

for (var i = C; i < 0; i ++){
    console.log(i)
}

console.log(i)

/// ***the odds numbers from 1 to n

let D = 43; 

for (let i = 1; i < D; i +=2 ){
    console.log(i)
}

console.log(i)