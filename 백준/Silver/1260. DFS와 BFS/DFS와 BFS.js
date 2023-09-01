//제대로 맞는 dfs bfs가 없음 - 맞아도 순서가 다름
//obj 만들때 정렬을 해야하나 
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NMV, ...A] = fs.readFileSync(filePath).toString().trim().split("\n")
let [N, M, V] = NMV.split(" ").map(Number);
A = A.map(e=>e.split(" ").map(Number));

let graph = {};
const objEdges = makeObjEdge(A);
// console.log(objEdges)

const orderDFS = dfs(objEdges, V);
console.log(orderDFS.join(" "))
const orderBFS = bfs(objEdges, V);
console.log(orderBFS.join(" "))

function makeObjEdge(A) {
    for(let i=1; i<=N; i++) {
        graph[i]=[];
    }
    for(let k=0; k<M; k++) {
        let node = A[k];
        graph[node[0]].push(node[1]);
        graph[node[1]].push(node[0]);
    }

    return graph;
}

function dfs(graph, startNode) {
    let visited = new Array(N).fill(0);
    let needVisit = [startNode];
    let order = [];
    
    while(needVisit.length!==0) {
        // console.log("!!", needVisit)

        let node = needVisit.pop();
        if(visited[node-1]===0) {
            visited[node-1]=1;
            order.push(node)
            needVisit.push(...(graph[node].sort((a,b)=>b-a)));
        }
    }
    return order
}

function bfs(graph, startNode) {
    let visited = new Array(N).fill(0);
    let needVisit = [startNode];
    let order = [];

    while(needVisit.length!==0) {
        // console.log("!!", needVisit)

        let node = needVisit.shift();
        if(visited[node-1]===0) {
            visited[node-1]=1;
            order.push(node)
            needVisit.push(...(graph[node].sort((a,b)=>a-b)));
            // for(let neighbor of graph[node]) {
            //     if(visited[neighbor-1]===0) {
            //         needVisit = [...needVisit, neighbor]
            //     }
            // }
        }
    }
    return order
}