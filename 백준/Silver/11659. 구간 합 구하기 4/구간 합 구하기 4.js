const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NM, nums, ...array] = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, M] = NM.split(' ').map(Number);
nums = nums.split(' ').map(Number);
array = array.map(e => e.split(' ').map(Number))
nums.unshift(0);
let output = [];

// 계산 쉽게 nums.unshift(0);
// 0~n 까지의 모든 누적합 저장하는 배열 생성
// 3~6 이면 sumarr[6] - sumarr[3]

let sumArr = new Array(N+1).fill(0);
sumArr[1] = nums[1];
for(let i=2; i<=N; i++) {
    sumArr[i] = sumArr[i-1] + nums[i];
}

for(let k=0; k<M; k++) {
    const [start, end] = array[k];
    output.push(sumArr[end] - sumArr[start-1]);
}

console.log(output.join("\n"))