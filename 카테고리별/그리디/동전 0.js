const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [nk, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n,k] = nk.split(' ').map(Number);
rest = rest.map(Number)

function solution(N,K,array) {
    var count = 0;
    array.sort((a,b)=>b-a);
    for(let i=0; i<N; i++) { 
        for(let j=0; j<array.length; j++) {
            if(array[j]<=K) { //내려오다가 자기보다 !같거나! 작은 것 중 가장 큰 수 
                count += (Math.floor(K/array[j]))
                K=K%array[j];
                break;
            }
        }
        if(K===0) return count;
    }
}

console.log(solution(n,k,rest))


/////////////////다른 정답 코드 
// const fs = require('fs');
// let [N, ...nums] = fs.readFileSync('dev/stdin').toString().trim().split(/\s+/).map(Number);

// let price = nums.shift();
// nums.sort((a, b) => b - a);

// let count = 0;

// for (let i = 0; i < nums.length; i++) {
//   if (price < nums[i]) {
//     continue;
//   } else {
//     const value = Math.floor(price / nums[i]);
//     price -= value * nums[i];
//     count += value;

//     if (price === 0) {
//       break;
//     }
//   }
// }

// console.log(count);