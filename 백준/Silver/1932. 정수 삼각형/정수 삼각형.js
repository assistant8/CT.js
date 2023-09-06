const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...A] = fs.readFileSync(filePath).toString().trim().split("\n");
A = A.map(e=>e.split(" ").map(Number))

// console.log(A)

const dp = Array.from(Array(Number(N)), (_, i)=>Array(i+1).fill(0))
dp[0] = A[0]
// console.log(dp)

for(let i=1; i<N; i++) {
    for(let k=0; k<A[i].length; k++) {
        if(k===0) dp[i][0] = dp[i-1][0] + A[i][0];
        else if(k===A[i].length-1) dp[i][k] = dp[i-1][k-1] + A[i][k];
        else dp[i][k] = Math.max(dp[i-1][k-1], dp[i-1][k]) + A[i][k];
    }
}

console.log(Math.max(...dp[N-1]))