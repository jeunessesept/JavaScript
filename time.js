

const d = new Date()
let h = (d.getHours());
let m = (d.getMinutes());
let s = (d.getSeconds());
let time = (h * 3600) + (m * 60) + s 

let daysec = 86400

console.log(daysec + "-" + time + "=" )
console.log("it left", daysec - time, "seconds before midnight")


console.log