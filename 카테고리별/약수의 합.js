const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...array] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
array = array.map(Number);

const max = 1000000;
let f = Array(max+1).fill(1);
let g = Array(max+1).fill(0);
f[1] = 1;
g[1] = 1;

//f(자신의 약수의 합)만을 먼저 구하는 것. 에라토스테네스 체 방식으로 (o(nloglogn))
//약수가 될만한 걸 다 돌려서 f(배수) 값을 한꺼번에 초기화함
//i가 약수가 되고 
for(let i=2; i<=max; i++) {
    for(let k=1; i*k<=max; k++) {
        f[i*k] += i;
    }
}

for(let i=2; i<=max; i++) {
    g[i] = g[i-1] + f[i];
}

let answer = [];
for(let i=0; i<N; i++) {
    answer.push(g[array[i]])
}

console.log(answer.join("\n"))


// 위 방식 정확히 체감이 안감. 시간복잡도가 왜 낮은지 모르겠음. 아래 방법으로 초과되면 위 방법을 시도해보는걸로만 넘어가자
// 시간복잡도 o(n루트n) 이라서 시간초과

// const max = 1000000;
// let book = Array(max+1);
// book[1] = 1;

// for(let i=2; i<=max; i++) {
//     //i 약수의 합 구하기
//     let sum=0;
//     for(let k=1; k<=Math.floor(Math.sqrt(i)); k++) {
//         if(i%k===0) {
//             sum+=k;
//             if(i/k!==k) sum+=(i/k);
//         }
//     }
//     book[i] = book[i-1] + sum;
// }
// 현재 g까지 구한거임

// let answer = [];
// for(let i=0; i<N; i++) {
//     answer.push(book[array[i]])
// }

// console.log(answer.join("\n"))
