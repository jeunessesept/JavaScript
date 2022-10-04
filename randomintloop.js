/// II - print random number of integers
///Write an algorithm which receives an random integer and prints from 0 to it.


let ranNum = Math.floor(Math.random()* 30)+1;

for (let i = 0; i<ranNum; i++ ){
    console.log(i)
}

console.log(ranNum)
