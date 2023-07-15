//
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


// (1)
// function comb(n, r) {
//     if (r == 0) {
//       return 1;
//     } else if (r > n) {
//       return 0;
//     } else {
//       return comb(n - 1, r - 1) + comb(n - 1, r);
//     }
//   }

// (2)
// function fact(n) {
//     if(n===0||n===1) return 1;
//     let sum = 1;
//     for(let i=2; i<n+1; i++) {
//         sum*=i
//     }
//     return sum
// }
//
// function comb(a,b) {
//     return fact(a)/(fact(b)*fact(a-b))
// }
  
  