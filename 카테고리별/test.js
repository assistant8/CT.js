// // function draw1(h) {
// //     if(h==0) {
// //         return;
// //     }
// //     console.log("!", h)
// //     draw1(h-1);
// //     console.log("?", h)

// //     for(let i=0; i<h; i++) {
// //         console.log("*")
// //     }
// //     console.log("\n")
// // }

// // // draw1(5)

// // let arr = [1,2,3,4,5];
// // const arr2 = [6,7];
// // let set = new Set(arr);

// // // set.add(...arr).add(8)


// // console.log(set)

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
//   graph[key].sort((a,b)=>a-b);
// }

// // console.log(graph)
  
// const DFS = (graph, startNode) => {
//   const visited = new Array(V).fill(0); // 탐색을 마친 노드들
//   let needVisit = []; // 탐색해야할 노드들
//   let count = 1;

//   needVisit.push(startNode); // 노드 탐색 시작

//   console.log(visited, needVisit)
//   console.log(V,E,R)


//   while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
//     const node = needVisit.pop(); //need에서 pop

//     if(visited[node-1]===0){ //pop 한게 아직 방문 안했다면면
//       visited[node-1]=count;
//       count++;
//       needVisit.push(...graph[node].reverse())
//     }
//   }
//   return visited;
// };

// // console.log(DFS(graph,R).join('\n'))
  
// //   const visitedResult = DFS(graph,R);
// //   visitedResult.forEach(e=>console.log(e))

//     // for(let i=1; i<=V; i++) { //i는 각 원소 1~5 
//     //   for(let k=0; k<visitedResult.length; k++) { //v[k]는 생성된 배열 
//     //     if(i===visitedResult[k]) {
//     //       console.log(k+1);
//     //       break;
//     //     }
//     //     if(k===visitedResult.length-1){ 
//     //       console.log(0)
//     //     }
//     //   }
//     // }

//     let queue = [1,2,3];
//     let array1 = [4,5,6];
//     // queue.push(...array1);
//     queue = [...array1, ...queue];

//     console.log(queue)

// const graph = [[0,0,0,0], [1,0,0,0], 3]
// const arr = "abcd"

// function d() {
//   graph.forEach(e=>{
//     if(e.includes(1)) return "1"
//   })
//   return "no"
// }

// const arr2 = arr.slice(1,3)
// console.log(arr2)
// console.log(arr)


