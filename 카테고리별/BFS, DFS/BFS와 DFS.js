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


// const dfs = (graph, start) => {
//     const checked = [];    // 탐색 완료 데이터
//     const willCheck = [];  // 탐색 예정 데이터
    
//     willCheck.push(start);
    
//     while(willCheck.length!==0){
//       const node = willCheck.pop();  // 스택(Last In First Out)
//       if(!checked.includes(node)){
//             checked.push(node);
//          //reverse() 제거 시 그림의 4,3,2,1 순서로 탐색     
//            willCheck.push(...graph[node].reverse());  
        
//       }
//    }
//     console.log(checked);
// }

// const bfs = (graph, start) => {
//     const checked = [];
//     const willCheck = [];
    
//     willCheck.push(start);
    
//     while(willCheck.length!==0){
//       const node = willCheck.shift(); // 큐(First In First Out)
//       if(!checked.includes(node)){
//             checked.push(node);
//            willCheck.push(...graph[node]);       
//       }
//    }
//    console.log(checked);
// }


// function dfs(graph, startNode) {
//     const visited = []; // 탐색을 마친 노드들
//     const stack = []; // 탐색해야할 노드들을 담을 스택
  
//     stack.push(startNode); // 시작 노드를 스택에 추가
  
//     while (stack.length !== 0) {
//       const node = stack.pop(); // 스택에서 노드를 하나 꺼냄
//       if (!visited.includes(node)) {
//         visited.push(node); // 노드를 방문 처리하고
//         const neighbors = graph[node]; // 현재 노드의 이웃 노드들
        
//         for (const neighbor of neighbors) {
//           stack.push(neighbor); // 이웃 노드를 스택에 추가
//         }
//       }
//     }
    
//     console.log(visited);
// }


// function bfs(graph, startNode) {
//     const visited = []; // 탐색을 마친 노드들
//     const queue = []; // 탐색해야할 노드들을 담을 큐
  
//     queue.push(startNode); // 시작 노드를 큐에 추가
//     visited.push(startNode); // 시작 노드는 방문 처리
  
//     while (queue.length !== 0) {
//       const node = queue.shift(); // 큐에서 노드를 하나 꺼냄
//       const neighbors = graph[node]; // 현재 노드의 이웃 노드들
      
//       for (const neighbor of neighbors) {
//         if (!visited.includes(neighbor)) {
//           visited.push(neighbor); // 이웃 노드를 방문 처리하고
//           queue.push(neighbor); // 큐에 추가
//         }
//       }
//     }
    
//     console.log(visited);
// }


// function bfs(objEdges, startingNode) {
//     const visited = {};
//     const queue = [];
//     const answer = [startingNode];

//     visited[startingNode] = 0;
//     queue.push(startingNode);

//     while(queue.length > 0) {
//         const currentNode = queue.shift();
//         const neighborArray = objEdges[currentNode] //현재 노드가 key인 배열

//         for(let i=0; i<neighborArray.length; i++) {
//             if(visited[neighborArray[i]]===undefined) {
//                 visited[neighborArray[i]]=true;
//                 queue.push(neighborArray[i]);
//                 answer.push(neighborArray[i])
//             }
//         }
//     }
//     console.log(answer)
// }

// function dfs(objEdges, startingNode) {
//     visited = {};
//     queue = [];
    
//     queue.push(startingNode);
    
//     while(queue.length > 0) {
//         const currentNode = queue.shift();
//         if(visited[neighborArray[i]]===undefined) {

//         }
//     }
// }