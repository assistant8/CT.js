const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
rest=rest[0].split(" ").map(Number)

rest.sort((a,b)=>a-b); //결국 정렬해서 더해주면 최종 누적합이 최소다 

let total = 0; //그냥 단계별로 누적합 더해주는 로직 
for(let i=0; i<N; i++) {
    let sum = 0;
    for(let k=0; k<=i; k++) {
        sum += rest[k]
    }
    console.log(sum)
    total += sum;
}

console.log(total)