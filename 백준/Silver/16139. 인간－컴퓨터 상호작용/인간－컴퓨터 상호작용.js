const fs = require("fs");
const [str, q, ...INPUT] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let result = "";

input = [];
INPUT.forEach((e) => {
  let temp = e.split(" ");
  temp[1] = +temp[1];
  temp[2] = +temp[2];

  input.push(temp);
});


const dp = {};

input.forEach((e) => {
  if (!dp[e[0]]) {
    let arr = [];

    for (let i = 0; i < str.length; i++) {
      let temp = i === 0 ? 0 : arr[i - 1];
      if (str[i] === e[0]) temp++;
      arr.push(temp);
    }

    dp[e[0]] = arr;
  }

  if (e[1] === 0) {
    result += dp[e[0]][e[2]] + "\n";
  } else {
    result += dp[e[0]][e[2]] - dp[e[0]][e[1] - 1] + "\n";
  }
});

console.log(result);
