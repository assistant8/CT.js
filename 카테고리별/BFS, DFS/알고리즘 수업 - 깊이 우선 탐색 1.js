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

for (const key in graph) {
  graph[key].sort().reverse();
}

// console.log(graph)
  
const DFS = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
    const node = needVisit.pop(); // queue이기 때문에 선입선출, shift()를 사용한다.
      if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
        visited.push(node)
        needVisit = [...needVisit, ...graph[node]];
      }
  }
  return visited;
};
  
  const visitedResult = DFS(graph,1);

    for(let i=1; i<=V; i++) { //i는 각 원소 1~5 
      for(let k=0; k<visitedResult.length; k++) { //v[k]는 생성된 배열 
        if(i===visitedResult[k]) {
          console.log(k+1);
          break;
        }
        if(k===visitedResult.length-1){ 
          console.log(0)
        }
      }
    }

