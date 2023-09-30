const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...array] = fs.readFileSync(filePath).toString().trim().split("\n")
array = array.map(e=>e.split(" ").map(Number))
N = Number(N)
// console.log(array)

const dp = new Array(N).fill(0);

for(let i=0; i<N; i++) {
    const [period, value] = array[i];
    if(i+period > N) continue;
    dp[i] = dp[i] + value; //i에선 무조건 i번째 수행한다고 생각
    
    for(let k=period+i; k<N; k++) { //i 수행할 시 기간 이후 가능한 날의 일들에 대한 값 할당
        dp[k] = Math.max(dp[k], dp[i]) //기존 값(i 수행 안함) vs i 수행한 값 
    }
}

console.log(Math.max(...dp))


// 원랜 2차원 배열로 각 i마다의 N크기 배열을 선언해서 했으면 이해 빨랐을텐데
// 굳이 이전 배열이 필요가 없기에 i++ 될때 배열 재사용 
// 위에서 물려받은 dp[i]는 i에 일할 수 있는 조건 하에 기존까지 최대수익을 보여주는 것
// 물론 i=3일 때 dp[7]처럼 3일에 일을 안한 경우도 있음 (2일에 하고 3일에 안한)
// https://kau-algorithm.tistory.com/800 보고 했음 
// 탭 노트 

// 이건 단순 브루트포스로 안되고 dp로 해야될 것 같은게
// 각 경우의 수를 조합 순열화 못시키고 무한 백트랙킹 해야되는 느낌
// 각 일을 택했을 때 이후 일을 택하는 경우가 동적으로 늘어남 

// dp[n] = 이걸 선택 or 이거 안하고 할 수 있는 것들을 했을 때 값 중 큰 것 

// n의 값 = n-1 값 + 현재 가능하면 현재 값 ? 틀렸던 처음 생각 
// console.log("dp[k], dp[i]", dp[k], dp[i]) 
