const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, array] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
array = array.split(" ").map(Number);

let max = 0;
for(let i=0; i<N; i++) { 
    let count = 1;
    let prev = array[i];
    for(let k=i+1; k<N; k++) {
        if(array[k] > prev) {
            count++;
            prev = array[k];
        }
    }
    // console.log(count)
    if(max < count) max = count;
}

console.log(max)