
///IV - minimum position
///Write an algorithm which receives an array of integers and prints the position of its minimum.

const arr = [897, 244, 3839, 48, 5989, 1390, 1238, 9999]

const min = Math.min(...arr)

const index = arr.indexOf(min)

console.log(min)
console.log(index)