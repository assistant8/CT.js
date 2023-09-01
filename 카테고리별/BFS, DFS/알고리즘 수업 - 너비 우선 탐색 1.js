const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [VER, ...A] = fs.readFileSync(filePath).toString().trim().split("\n")
let [V,E,R] = VER.split(" ").map(Number);
A = A.map(e=>e.split(" ").map(Number))

let graph = {};
for(let i=1; i<=V; i++){
  graph[i] = [];
}

for(let i=0; i<E; i++) {
  let edge = A[i];
  graph[edge[0]].push(edge[1]);
  graph[edge[1]].push(edge[0]);
};

// for (const key in graph) { //각 키마다 가지고 있는 배열 각각을 정렬
//   graph[key].sort((a,b)=>a-b)
// }

console.log(graph)

let visitedResult = bfs(graph, R, V);
console.log(visitedResult.join("\n"));

function bfs(graph, start, V) {
    const visited = new Array(V).fill(0);
    let count = 1;
    let queue = [start];

    while(queue.length !== 0) {
        const node = queue.shift();
        if(visited[node-1]===0) { //그 노드 방문 안했으면 
            visited[node-1] = count; //방문 처리
            count++;
            for(const neighbor of graph[node]) { //그 인접 노드들 큐에 박아놓음
                queue.push(neighbor);
            }
        }
    }
    return visited;
}

// function bfs(graph, start, V) {
//     const visited = new Set();
//     const queue = [];
//     const sequence = new Map(); // Map을 사용하여 sequence 저장
//     let count = 1; // count 값을 1로 초기화

//     queue.push(start);
//     visited.add(start);
//     sequence.set(start, count); // Map에 값을 저장

//     while(queue.length > 0) {
//         const node = queue.shift();
//         const neighbors = graph[node];
//         neighbors.sort((a, b) => a - b);

//         for(const neighbor of neighbors) {
//             if(!visited.has(neighbor)) {
//                 visited.add(neighbor);
//                 queue.push(neighbor);
//                 count++; // 여기서 증가하도록 수정
//                 sequence.set(neighbor, count);
//             }
//         }
//     }

//     for(let i = 1; i <= V; i++) {
//         const value = sequence.get(i);
//         value !== undefined ? console.log(value) : console.log(0);
//     }
// }


//시간초과
//visited 배열 대신에 Set 자료구조
//sequence 객체 대신 Map 자료구조
//해봤는데도 안돼 안해 