//V - ordered array
//Write a algorithm which receives an array of integers and check if its ordered ascendantly. 
///Print true if the array is ordered, false if it’s not.


const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});

console.log(points)