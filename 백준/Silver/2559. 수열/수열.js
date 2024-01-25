const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NM, array] = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, K] = NM.split(' ').map(Number);
array = array.split(" ").map(Number);

// console.log(array)

// 투포인터 - 처음 0~k 초기값 두고 거기서 left 빼고 right 더하는 형식으로 합 구한 뒤 최대 구하기
// 누적합 - 각 idx까지의 누적합 다 구하고 그걸로 합 구한 뒤 최대 구하기 

// 투포인터
let left = 0; 
let right = K-1;
let sum = 0; 

for(let i=0; i<K; i++) {
    sum += array[i];
}
let max = sum;

while(right < N-1) {
    sum = sum - array[left++] + array[++right];
    if(sum > max) max = sum;
}

console.log(max)