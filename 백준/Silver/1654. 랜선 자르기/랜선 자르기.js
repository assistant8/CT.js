const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [KN, ...A] = fs.readFileSync(filePath).toString().trim().split("\n")

let [K, N] = KN.split(" ").map(Number)
A = A.map(Number)

A.sort((a,b)=>a-b);

let left = 1;
let right = A[K-1]; // 가능한 최대 길이

let result = 0; // 결과값 저장 변수

while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (cutline(mid) >= N) {
        // 원하는 개수 이상을 만들 수 있는 경우
        result = mid; // 결과값 갱신
        left = mid + 1; // 더 큰 길이 찾기
    } else {
        right = mid - 1; // 길이를 줄여서 개수를 늘리기
    }
}

console.log(result);

function cutline(line) {
    let sum = 0;
    for (let i = 0; i < K; i++) {
        sum += Math.floor(A[i] / line);
    }
    return sum;
}