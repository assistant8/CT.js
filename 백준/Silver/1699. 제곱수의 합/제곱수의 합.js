const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = Number(input[0])

function solution(num) {
    const memo = Array(num + 1).fill(Infinity);

    memo[0] = 0;
    memo[1] = 1;
    memo[2] = 2;
    memo[3] = 3;
    if(num<4) return memo[num]
    
    for(let i=1; i<=num; i++) {
        for(let k=1; k*k<=i; k++) {
            var limit = k*k;            
            memo[i] = Math.min(memo[i], 1 + memo[i-limit])
        }
    }

    return memo[num]
}

console.log(solution(input))