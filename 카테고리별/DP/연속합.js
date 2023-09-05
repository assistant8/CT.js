const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...A] = fs.readFileSync(filePath).toString().trim().split("\n");
let arr = A[0].split(" ").map(Number);

console.log(arr)

let dp = new Array();
dp[0] = arr[0];

for(let i=1; i<N; i++) {
    dp[i] = Math.max(arr[i], dp[i-1]+arr[i]);
}

//배열 중 max 구하고 출력
let max = dp[0];
dp.forEach(e=>{
    if(e>max) max=e;
})
console.log(max)


//힌트를 얻음 
//연속된 한 개 이상의 수의 합
//처음부터 쭉 더해와서 (나와의 합 < 나 자체) 성립 시 손절하고 나 자체로 배열합을 바꿈
//그러면 나의 index부터 배열의 합을 더한 것으로 간주됨

//처음엔 모든 길이의 순열을 구해서 비교해야하나 했지만
//위 손절 아이디어와 더불어 이전 결과들을 배열에 저장하여 비교할 수 있게 하는게 dp 방법 