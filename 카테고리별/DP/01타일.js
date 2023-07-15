const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = Number(input[0])

// var zero; //0~input/2
// var one = input-zero*2;

memo = [];
memo[1] = 1;
memo[2] = 2;

if(input===1||input===2) console.log(memo[input])

for (let i = 3; i <= input; i++) {
  memo[i] = (memo[i - 1] + memo[i - 2])%15746;
  if (i === input) console.log(memo[i]);
}
