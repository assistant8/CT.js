const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number); 
let dp = Array(m + 1).fill(0);
dp[0] = 1;

for (let i = 0; i < n; i++) {
  for (let j = coins[i]; j <= m; j++) {
    dp[j] = dp[j] + dp[j - coins[i]];
  }
}

console.log(dp[m]);