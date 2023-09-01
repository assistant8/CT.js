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