const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...A] = fs.readFileSync(filePath).toString().trim().split("\n")
N=Number(N);
A = A.map(e=>e.split("").map(Number))

// console.log(A)

let resultArr = [];
for(let i=0; i<N; i++) {
    for(let k=0; k<N; k++) {
        let countBFS = 0;
        if(A[i][k]===1) countBFS = BFS([i, k]);
        countBFS!==0 && resultArr.push(countBFS);
    }
}
resultArr.sort((a,b)=>a-b) 
console.log(resultArr.length)
resultArr.forEach(e=>console.log(e))

function BFS(first) {
    const [i,k] = first;
    let count = 0;
    const needVisit = [[i,k]];

    while(needVisit.length!==0) {
        const [a,b] = needVisit.shift();
        if(A[a][b]===1) { //그 지점이 1 (=1인데 아직 방문 x) 이면 방문 처리 및 count++
            A[a][b]++;
            count++;
            if(a+1<N && A[a+1][b]===1) needVisit.push([a+1,b]) //그 지점의 사방으로 1 있나 확인 (미방문 1 노드)
            if(a-1>-1 && A[a-1][b]===1) needVisit.push([a-1,b])
            if(b+1<N && A[a][b+1]===1) needVisit.push([a,b+1])
            if(b-1>-1 && A[a][b-1]===1) needVisit.push([a,b-1])
            // console.log("needVisit", needVisit)
        }
    }

    return count;
}
