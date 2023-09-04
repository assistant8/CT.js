const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...A] = fs.readFileSync(filePath).toString().trim().split("\n");
let arr = A[0].split(" ").map(Number);

// console.log(arr)

//연속된 한 개 이상의 수의 합
//처음부터 쭉 더해와서 (나와의 합 < 나 자체) 성립 시 손절하고 나 자체로 배열합을 바꿈
//그러면 나의 index부터 배열의 합을 더한 것으로 간주됨

let dp = new Array();
dp[0] = arr[0];

for(let i=1; i<N; i++) {
    dp[i] = Math.max(arr[i], dp[i-1]+arr[i]);
}

let max = dp[0];

dp.forEach(e=>{
    if(e>max) max=e;
})
console.log(max)