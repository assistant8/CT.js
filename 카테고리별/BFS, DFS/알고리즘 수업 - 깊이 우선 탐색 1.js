// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let [VER, ...A] = fs.readFileSync(filePath).toString().trim().split("\n")
// let [V,E,R] = VER.split(" ").map(Number);
// A = A.map(e=>e.split(" ").map(Number))

// let graph = {};
// for(let i=1; i<=V; i++){
//   graph[i] = [];
// }

// for(let i=0; i<E; i++) {
//   let edge = A[i];
//   graph[edge[0]].push(edge[1]);
//   graph[edge[1]].push(edge[0]);
// };

// for (const key in graph) {
//   graph[key].sort((a,b)=>a-b)
// }

// // console.log(graph)
  
// const DFS = (graph, startNode) => {
//   const visited = []; // 탐색을 마친 노드들
//   let needVisit = []; // 탐색해야할 노드들

//   needVisit.push(startNode); // 노드 탐색 시작

//   while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
//     const node = needVisit.pop(); //need에서 pop

//     if(!visited.includes(node)){ //pop 한게 아직 방문 안했다면면
//       visited.push(node);

//       const neighbors = graph[node].reverse(); //visit 추가 및 node와 연결된거 뽑아냄 
//       for (const neighbor of neighbors) { //연결된거 하나씩 
//         if (!visited.includes(neighbor)) { //
//           needVisit.push(neighbor);
//         }
//       }
//     }
    
//   }
//   return visited;
// };
  
//   const visitedResult = DFS(graph,R);

//     for(let i=1; i<=V; i++) { //i는 각 원소 1~5 
//       for(let k=0; k<visitedResult.length; k++) { //v[k]는 생성된 배열 
//         if(i===visitedResult[k]) {
//           console.log(k+1);
//           break;
//         }
//         if(k===visitedResult.length-1){ 
//           console.log(0)
//         }
//       }
//     }

///위는 답은 맞는데 시간초과 - needvisit set으로 만들기 / visit 000으로도 만들어봤는데 안바꿔짐
//많은걸 바꿔봤지만 메모리 초과 등도 나버림 

//결국 퍼온거 내 식대로 바꾼거 - 통과
//위와 다른게 visited를 노드들 push하고 includes로 판별한게 아니라 
//노드 개수만큼 0으로 두고 node의 자리가 0인지 판별하는 것으로 전환 = includes가 시간초과 될 듯
//그리고 아래에서 후처리안하고 visited에 count++로 순서를 넣어줘벼려서 바로 그 visited 찍으면 됨

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
  graph[key].sort((a,b)=>a-b);
}

console.log(graph)
  
const DFS = (graph, startNode) => {
  const visited = new Array(V).fill(0); // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들
  let count = 1;

  needVisit.push(startNode); // 노드 탐색 시작

  console.log(visited, needVisit)
  console.log(V,E,R)


  while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
    const node = needVisit.pop(); //need에서 pop

    if(visited[node-1]===0){ //pop 한게 아직 방문 안했다면면
      visited[node-1]=count;
      count++;
      needVisit.push(...graph[node].reverse())
    }
  }
  return visited;
};

console.log(DFS(graph,R).join('\n'))








/////////////////////////////////////// 퍼온 정답

// let fs = require('fs');
// const filePath = process.platform === `linux` ? `/dev/stdin` : `input.txt`; 
// let input = fs.readFileSync(filePath).toString().split('\n');
// const c = console.log


// // 정점의 수 N (5 ≤ N ≤ 100,000), 간선의 수 M (1 ≤ M ≤ 200,000), 시작 정점 R (1 ≤ R ≤ N)
// let N = Number(input[0].split(' ')[0])
// let M = Number(input[0].split(' ')[1])
// let R = Number(input[0].split(' ')[2])


// const dfs = (N, M, R) => {
  
//   //간선연결시키기 , 정렬하기
//   let graph = {}

//   for(let i = 1 ; i < N+1 ; i++){
//     graph[i] = []  
//   }


//   for(let i = 1 ; i < M+1 ; i++){
//     u = Number(input[i].split(' ')[0])
//     v = Number(input[i].split(' ')[1])

//     // 무방향그래프
//     graph[u].push(v)
//     graph[v].push(u)

//   }

//   for(let i =1 ; i < M+1 ; i++){
//     if (graph[i]){
//     graph[i].sort((a,b)=>{
//       return a-b
//     })
//   }
//   }
  

//   const visited = new Array(N).fill(0); // [0, 0, 0, 0, 0] // 탐색을 마친 노드들
  
//   let cnt = 1

//   let needVisit = []; // 탐색해야할 노드들

//   needVisit.push(R); // 노드 탐색 시작

//   while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
//     const node = needVisit.pop(); 
//     if (visited[node-1] === 0 ) { // 해당 노드가 탐색된 적 없다면
//       visited[node-1] = cnt; 
//       cnt +=1

//       needVisit.push(...graph[node].reverse()) // stack이니까 뒤에서 부터 빼줘야하니까 꺼구로 뒤집음. b와 c 중 b를 먼저 하게끔.
//     }
//   }
//   return visited;

//   };
  
// c(dfs(N,M,R).join('\n'))