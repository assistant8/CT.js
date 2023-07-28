const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
rest = rest.map(e=>{
    return e.split(" ").map(Number)
})

rest.sort(function(a,b) {
    if(a[0]===b[0]) {
        return a[1]-b[1]
    } else {
        return a[0]-b[0]
    }
})

// console.log(rest)

let count = 1;
let currentBack = rest[0][1];
if(N===1) {
    console.log(1)
    return;
}

for(let i=1; i<rest.length; i++){
    if(currentBack>rest[i][1]) {
        currentBack = rest[i][1]
    } 
    else if(currentBack<=rest[i][0]) {
        count++;
        currentBack = rest[i][1]
    }
}

console.log(count)