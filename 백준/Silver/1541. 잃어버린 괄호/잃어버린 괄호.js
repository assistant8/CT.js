const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim()

let sum = 0;
input = input.split("-").map(e=>e.split("+").map(Number).reduce((a,b)=>a+b))
input.forEach((e,i)=>{
    if(i!==0) sum -= e;
    else sum = e
})
console.log(sum)