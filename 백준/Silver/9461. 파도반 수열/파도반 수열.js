const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...A] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
let w = [];

function wave(n) {
    w[3] = w[1] = w[2] = 1;

    for(let i=4; i<=n; i++) {
        w[i] = w[i-2] + w[i-3];
    }
    return w[n]
}

for(let k=0; k<N; k++) {
    console.log(wave(A[k]))
}