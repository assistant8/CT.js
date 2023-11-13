let fs = require("fs");
let knapsack = fs.readFileSync("input.txt").toString().split("\n");
const N = Number(knapsack[0].split(" ")[0]);
const K = Number(knapsack[0].split(" ")[1]);
knapsack = knapsack.map((element) =>
  element
    .trim()
    .split(" ")
    .map((value) => Number(value))
);
const weight = [];
const value = [];
for (let n = 0; n <= N; n++) {
  weight.push(knapsack[n][0]);
  value.push(knapsack[n][1]);
}
console.log("weight", weight)
console.log("value", value)

const dp = Array.from(new Array(N + 1), () => new Array(K + 1));

for (let i = 0; i <= N; i++) {
  dp[i][0] = 0;
}
for (let j = 0; j <= K; j++) {
  dp[0][j] = 0;
}
for (let j = 1; j <= K; j++) {
  if (knapsack[1][0] <= j) {
    dp[1][j] = knapsack[1][1];
  } else {
    dp[1][j] = 0;
  }
}
console.log("dp", dp)

for (let i = 2; i <= N; i++) {
  for (let j = 1; j <= K; j++) {
    if (j < weight[i]) { //현재 허용 무게보다 물건이 무거우면
      dp[i][j] = dp[i - 1][j];
    } else { //현재 허용 무게가 물건[i]보다 커서 가능 시 
      // 현재 물건을 포함하지 않는 경우 : dp[i - 1][j]
      // 현재 물건을 포함하는 경우: dp[i-1][j - weight[i]] + value[i]
        // dp[i-1][j-현재 물건 무게] + 현재 물건의 가치 
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
    }
  }
}
console.log("dp", dp)

console.log(dp[N][K]);

//weight value 모두 1이 1번째 값으로 되도록 
// 현재 물건을 포함하는 경우에서 dp[i-1][j-w[j]] + v[j]인 이유는, 우선 dp[i-1][j-w[j]]는 남은 공간의 가치를 말합니다. 즉 현재 물건을 포함했을 경우 i번째 물건을 위해 i번째 물건 만큼의 무게를 비웠을 때의 최대가치는 i-1번째의 j - w[j]에 저장이 되어있기 때문에 그 곳에 가서 보는겁니다. 그리고 현재 물건의 가치를 더해주면 되는 것입니다.

//  https://nyang-in.tistory.com/279?category=855466
// https://nyang-in.tistory.com/280?category=855466