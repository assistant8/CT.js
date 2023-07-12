const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
input = input.map(v=>Number(v))

function comb(n, k) {
    const memo = [];

    for (let i = 0; i <= n; i++) {
      memo[i] = [];
      for (let j = 0; j <= Math.min(i, k); j++) {
        if (j === 0 || j === i) {
          memo[i][j] = 1;
        } else {
          memo[i][j] = (memo[i - 1][j - 1] + memo[i - 1][j])%10007;
        }
      }
    }
  
    return memo[n][k];
  }

console.log((comb(input[0], input[1])));