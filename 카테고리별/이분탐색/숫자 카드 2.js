const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const arr1 = input[1].split(" ").map(Number);
const M = Number(input[2]);
const arr2 = input[3].split(" ").map(Number);

const countMap = new Map();
for (let num of arr1) {
  countMap.set(num, (countMap.get(num) || 0) + 1);
}
console.log(countMap)

const answer = [];
for (let num of arr2) {
  answer.push(countMap.get(num) || 0);
}

console.log(answer.join(" "));


// 처음 방법 - 탐색시간 : 배열 >> map 
// 시간 초과 50%
// 이분 탐색 로직에 맞으면 넘어가는 것이 아니라 mid=target 이면 그 안에서 루프돌면서 좌우에 더 있나 보는 것
// 이분 탐색으로 시간 초과 ;; 다들 map으로 풀어버림 

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let [N, arr1, M, arr2] = fs.readFileSync(filePath).toString().trim().split("\n");

// arr1 = arr1.split(" ").map(Number)
// arr2 = arr2.split(" ").map(Number)
// N = Number(N)
// M = Number(M)

// arr1.sort((a,b)=>a-b);
// const answer = Array(M).fill(0)

// for(let i=0; i<arr2.length; i++) {
//     let left = 0;
//     let right = N-1;
//     let target = arr2[i];

//     while(left<=right) {
//         let mid = Math.floor((left+right)/2);

//         if(arr1[mid]===target) { //찾아도 좌우로 더 있나 찾아보기 
//             answer[i]++; //일단 1
//             let tempMid = mid;
//             while(arr1[mid]===target) { 
//                 mid--;
//                 if(arr1[mid]===target) answer[i]++;
//                 else break;
//             }
//             while(arr1[tempMid]===target) {
//                 tempMid++;
//                 if(arr1[tempMid]===target) answer[i]++;
//                 else break;
//             }
//             break;
//         } else if(arr1[mid]<=target) { //실수 mid만 적음 
//             left = mid+1;
//         } else {
//             right = mid-1;
//         }  
//     }
    
// }

// console.log(answer.join(" "))