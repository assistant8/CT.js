const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [VER, ...A] = fs.readFileSync(filePath).toString().trim().split("\n")
let [V,E,R] = VER.split(" ").map(Number);
A = A.map(e=>e.split(" ").map(Number))

console.log(A);

let graph = {};
for(let i=1; i<=V; i++){
  graph[i] = [];
}

for(let i=0; i<E; i++) {
    let edge = A[i];
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);    
}

for (const key in graph) {
    graph[key].sort();
}

console.log(graph)


// for(let i=0; i<E i++) {
//   let edge = A
// };
  
//   const DFS = (graph, startNode) => {
//     const visited = []; // 탐색을 마친 노드들
//     let needVisit = []; // 탐색해야할 노드들
  
//     needVisit.push(startNode); // 노드 탐색 시작
  
//     while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
//       const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
//         if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
//           visited.push(node); 
//           needVisit = [...graph[node], ...needVisit];
//         }
//     }
//     return visited;
//   };
  
  // console.log(DFS(graph, "A"));