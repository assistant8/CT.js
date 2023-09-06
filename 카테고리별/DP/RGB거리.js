const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...A] = fs.readFileSync(filePath).toString().trim().split("\n");
A = A.map(e=>e.split(" ").map(Number))
// console.log(A)

const dp = Array.from(Array(Number(N)), ()=>Array(3).fill(0))

for(let i=0; i<3; i++) {
    dp[0][i] = A[0][i];
}

for(let i=1; i<Number(N); i++) {
    dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2])+A[i][0];
    dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2])+A[i][1];
    dp[i][2] = Math.min(dp[i-1][1], dp[i-1][0])+A[i][2];
    // console.log(dp[i])
}

console.log(Math.min(...dp[N-1]))

//i번째 자기 자신 원소 + 위 단계(i-1)에서 만들어진 dp 배열 중 자기 위 제외 최소 값
//과정은 알겠지만 어떻게 이런 아이디어를 내서 문제를 풀었어야할까
//경우의 수를 나눠 독립적으로 가는게 아닌 배열로 저장해놓고 i+1에서 그 중 최소를 찾아 이용하는 것