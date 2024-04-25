const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, array1, M, array2] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
M = Number(M);
array1 = array1.split(" ").map(Number);
array2 = array2.split(" ").map(Number);

array1.sort((a,b)=>a-b);
const answer = [];

for(let i=0; i<M; i++) {
    const target = array2[i];
    let left = 0;
    let right = N-1;

    while(left<=right) {
        let mid = Math.floor((left+right)/2);

        if(array1[mid]===target) {
            answer.push(1);
            break;
        } else if(target<array1[mid]) {
            right = mid-1;
        } else {
            left = mid+1;
        }
        if(left>right) answer.push(0);
    }
}

console.log(answer.join(" "))

// 전형적인 이분탐색
// 카드마다 존재하는지 탐색하려면 n^2
// 존재 카드 리스트를 정렬하여 이분탐색하여 nlogn