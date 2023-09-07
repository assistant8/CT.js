const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...A] = fs.readFileSync(filePath).toString().trim().split("\n");
A = A.map(Number)

const dp = new Array(N)
dp[0] = A[0];
dp[1] = A[1] + A[0];
dp[2] = A[2] + Math.max(A[0], A[1]);
// console.log(dp)

for(let i=3; i<N; i++) {
    dp[i] = Math.max(dp[i-3]+A[i-1]+A[i], dp[i-2]+A[i])
}

console.log(dp[N-1])

//dp 배열은 각 i단계에서의 누적합의 최댓값 저장
//일단 dp[0,1,2] 는 직과적으로 알 수 있는 값이니 초기화, 그래야 이후 순차적으로 그 값들을 이용하면서 점화식 ㄱ
// https://s0ojin.tistory.com/4
//i-2의 dp를 이용할 수 있는건 dp[i-2]를 구할 때 연속 3개 오는건 안되는걸로 반영이 되었기 떄문
//i-3의 dp를 이용하는 이유는, i-1의 dp 값은 .. 이와같은 조합을 반영하지 못하기 때문?
//dp는 이전 i들의 합을 전부 반영한 값임 
//잘 모르겠음