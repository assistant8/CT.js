const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, C, ...A] = fs.readFileSync(filePath).toString().trim().split("\n")
N=Number(N);
A = A.map(e=>e.split(" ").map(Number))

// console.log(A)

const graph = {};
for(let i=1; i<=N; i++) {
    graph[i] = [];
}

for(let i=0; i<C; i++) {
    const node = A[i];
    graph[node[0]].push(node[1]);
    graph[node[1]].push(node[0]);
}
// console.log(graph)

function dfs(graph1) {
    const visited = new Array(N).fill(0); //
    const needVisit = [1];

    while(needVisit.length!==0) {
        const node = needVisit.pop();
        if(visited[node-1]===0) {
            visited[node-1]=1;
            needVisit.push(...graph[node])
        }
    }
    let count = -1;
    visited.forEach(e=>{
        if(e===1) count++;
    })
    console.log(count)
}

dfs(graph)