const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...A] = fs.readFileSync(filePath).toString().trim().split("\n");
A = A.map(e=>e.split(" ").map(Number))
console.log(A)

const dp = Array.from(Array(Number(N)), ()=>Array(3).fill(0))

for(let i=0; i<3; i++) {
    dp[0][i] = A[0][i];
}

console.log(dp[0])
for(let i=1; i<Number(N); i++) {
    dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2])+A[i][0];
    dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2])+A[i][1];
    dp[i][2] = Math.min(dp[i-1][1], dp[i-1][0])+A[i][2];
    console.log(dp[i], Math.min(dp[i-1][1], dp[i-1][2]))
}

