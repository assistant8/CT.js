const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const readline = require("readline");
const rl = readline.createInterface({
  input:
    process.platform === "linux"
      ? process.stdin
      : fs.createReadStream(filePath),
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [first, second] = input;
  const lcs = Array.from(Array(first.length + 1), () =>
    Array(second.length + 1).fill(0)
  );
  for (let i = 0; i <= first.length; i++) {
    const char1 = first[i - 1];
    for (let k = 0; k <= second.length; k++) {
      const char2 = second[k - 1];
      if (i === 0 || k === 0) lcs[i][k] = 0;
      else if (char1 === char2) lcs[i][k] = lcs[i - 1][k - 1] + 1;
      else lcs[i][k] = Math.max(lcs[i - 1][k], lcs[i][k - 1]);
    }
  }
    console.log(lcs[first.length][second.length]);
});