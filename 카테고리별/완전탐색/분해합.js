const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let N = Number(fs.readFileSync(filePath).toString().trim())
for(let i=0; i<N; i++) {
    let total = i + digitSum(i);
    if(total === N) {
        console.log(i)
        break;
    }
    if(i === N-1) console.log(0)
}

function digitSum(num) {
    num = String(num);
    let sum = num.split("").map(Number).reduce((accumulator, value)=>{
        return accumulator+value;
    }, 0)
    return sum;
}

//그냥 N 전까지 모든 수의 자릿수합 + 그 수 해서 N과 동일하면 그거 리턴 
//for문 돌림 