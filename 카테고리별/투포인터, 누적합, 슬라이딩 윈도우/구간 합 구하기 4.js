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

console.log(output.join("\n")) // 한번에 출력 안하면 시간 초과 
// unshift, for문 2개 해서 O(3n) 정도일듯 


// 그냥 해본 결과 시간 초과 O(n^2)

// for(let i=0; i<M; i++) {
//     const [start, end] = array[i];
//     let sum = 0;
//     for(let k=start; k<=end; k++) {
//         sum += nums[k];
//     }
//     console.log(sum);
// }