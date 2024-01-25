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
    // console.log("sum", sum, right)
    if(sum > max) max = sum;
}

console.log(max)

// 누적합
// const sumArr = new Array(N).fill(0);
// sumArr[0] = array[0];
// for(let i=1; i<N; i++) {
//     sumArr[i] += sumArr[i-1] + array[i];
// }
// // console.log(sumArr)

// let sum;
// let max = -Infinity;
// for(let j=K-1; j<N; j++) { //k는 end
//     if(j === K-1) sum = sumArr[j]; //처음엔 빼줄게 없으니 
//     else sum = sumArr[j] - sumArr[j-K];
//     if(sum > max) max = sum;
// }
// console.log(max);
