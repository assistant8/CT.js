const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, array] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
array = array.split(" ").map(Number);

const dp = Array(n).fill(1);

for (let i = 0; i < n; i++) {
  const value = array[i];
  const temp = [];
  for (let k = 0; k < i; k++) {
    if (value > array[k]) {
      temp.push(k);
    }
  }

  let max = 0;
  for (let k = 0; k < temp.length; k++) {
    const idx = temp[k];
    if (max < dp[idx]) max = dp[k];
  }
  dp[i] = max + 1;
}
console.log(Math.max(...dp));

// 순서 수열 순증가, 제일 많은 수열
// 해당 dp값은 자신보다 이전 array들 중 자신보다 작은 값을 가진 애들 중에, 가장 큰 dp 값을 가진애의 dp+1을 가진다

///////////////////다른 풀이
function sol() {
  const dp = Array(N).fill(1);

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (list[j] < list[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  console.log(Math.max(...dp));
}
