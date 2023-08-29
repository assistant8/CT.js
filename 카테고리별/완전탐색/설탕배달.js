const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let N = fs.readFileSync(filePath).toString().trim();

let count = 0;
let remain;

//일단 5 -> 3 순으로 나눠야함 

let five = Math.floor(N/5);
for(let i=five; i>=0; i--) {
    let fiveRemain = N-(5*i);
    if(fiveRemain%3 === 0) { //5의 몫을 최대로 한 지금 3으로 나눠떨어지면 최적 
        count += i;
        count += fiveRemain/3;
        // console.log(i, fiveRemain/3)
        break;
    }
    if(i===0) {
        count = -1;
    }
}

console.log(count)


// 기존 풀이, 11같이 5를 한번 3을 2번 이런 input은 안맞음

// if((N%5)%3===0) { //5로 나누고 나머지가 3으로 안나눠지면 3으로만 나눠
//     remain = N%5;
//     count += Math.floor(N/5);
//     count += Math.floor(remain/3);
// } else if((N)%3===0) { 
//     count += Math.floor(N/3);
// } else count = -1;