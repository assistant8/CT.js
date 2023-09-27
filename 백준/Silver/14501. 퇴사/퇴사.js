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