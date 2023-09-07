const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...A] = fs.readFileSync(filePath).toString().trim().split("\n");
A = A.map(Number)

const dp = new Array(N)
dp[0] = A[0];
dp[1] = A[1] + A[0];
dp[2] = A[2] + Math.max(A[0], A[1]);
// console.log(dp)

for(let i=3; i<N; i++) {
    dp[i] = Math.max(dp[i-3]+A[i-1]+A[i], dp[i-2]+A[i])
}

console.log(dp[N-1])
