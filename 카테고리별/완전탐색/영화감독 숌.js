const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let N = fs.readFileSync(filePath).toString().trim();

//666 1666 2666 ... 5666 6660

let count = 0;
for(let i=0; 1; i++) { //임의
    let numStr = String(i);
    if(numStr.includes(666)) {
        count++;
        // console.log(i, count)
        if(count == N) {
            console.log(i)
            break;
        }
    }
}

//666 연속으로 포함되어있는지가 관건이기때문에 includes로 간단하게 처리
//순열인줄 알았지만.. 