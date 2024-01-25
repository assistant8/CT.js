const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [num] = fs.readFileSync(filePath).toString().trim().split().map(Number);

// console.log(num);

// num 포함 이하 소수들 리스트 뽑아냄
// 그 중에서 연속 수열 합 중 num인 경우의 수 뽑아냄
    // sum이 num보다 같거나 크면 sum-left, left++
    // num보다 작으면 right++, sum+right
    // 같으면 count++ 추가 진행 

const primeArr = [2];
for(let i=3; i<=num; i++) {
    let flag = 1;
    for(let k=2; k<=Math.sqrt(i); k++) {
        if(i % k === 0) {
            flag = 0;
            break;
        }
    }
    if(flag) primeArr.push(i);
}

// console.log(primeArr)

let left = 0, right = 0;
let count = 0;
let sum = primeArr[0];
const leng = primeArr.length;

while(right < leng) {
    // console.log("sum", sum, left, right)

    if(sum >= num) {
        if(sum === num) count++;
        sum -= primeArr[left++];
    } else if(sum < num) {
        sum += primeArr[++right];
    }
}

console.log(count)