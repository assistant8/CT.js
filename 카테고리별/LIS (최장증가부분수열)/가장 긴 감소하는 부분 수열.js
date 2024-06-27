const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, array] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
array = array.split(" ").map(Number);

let dp = Array(N).fill(0);
for(let i=0; i<N; i++) {
    let temp = [];
    for(let k=0; k<i; k++) {
        if(array[i]<array[k]) {
            temp.push(k);
        }
    }

    let max = 0;
    for(let k=0; k<temp.length; k++) {
        const idx = temp[k];
        if(dp[idx]>max) max = dp[idx];
    }
    dp[i] = max + 1;
}

console.log(Math.max(...dp))