const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
rest=rest[0].split(" ").map(Number)

rest.sort((a,b)=>a-b);
// console.log(rest)

let total = 0;
for(let i=0; i<N; i++) {
    let sum = 0;
    for(let k=0; k<=i; k++) {
        sum += rest[k]
    }
    // console.log(sum)
    total += sum;
}

console.log(total)