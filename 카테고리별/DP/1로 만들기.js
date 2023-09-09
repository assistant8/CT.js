// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let n = fs.readFileSync(filePath).toString().trim();
// n = 10;
// const N = n;

// const dp = Array.from(Array(N), ()=>Array(3).fill(1000000000000))
// let count = 0;
// console.log(dp)

// //1고려 
// for(let i=0; i<=N; i++) {
//     if(n%3===0) dp[i][0]=n/3;
//     if(n%2===0) dp[i][1]=n/2;
//     dp[i][2]=n-1;

//     if(n===1) {
//         console.log(count);
//         break;
//     }
// }



// 퍼온 정답
//각 answer[i]는 i를 1로 만들 때의 연산 횟수
//최대 3으로 나누는 연산이 for문에 있으므로 answer[3]까지는 초기화 되어있어야
//-1 하는 경우를 먼저 해도되는 이유는 어차피 2나3으로 나눠떨어지면 아래에서 값 재할당 됨

let N = 10;
let answer = Array.from(Array(N + 1), () => 0)
answer[2] = 1
answer[3] = 1

for (let i = 4; i <= N; i++) {
  // -1 하는 경우 -> 이전 값의 경우의 수 +1
  answer[i] = answer[i - 1] + 1
  // 3으로 나누어지는 경우 -> 3으로 나눈 값의 경우의 수 +1
  if (i % 3 === 0) {
    answer[i] = Math.min(answer[i], answer[i / 3] + 1)
  }
  // 2로 나누어지는 경우 -> 2로 나눈 값의 경우의 수 +1
  if (i % 2 === 0) {
    answer[i] = Math.min(answer[i], answer[i / 2] + 1)
  }
  console.log(answer[i])
}

console.log(answer[N])