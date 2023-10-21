const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, C, ...A] = fs.readFileSync(filePath).toString().trim().split("\n")
N=Number(N);
A = A.map(e=>e.split(" ").map(Number))

console.log(A)

const graph = {};
for(let i=1; i<=N; i++) graph[i]=[];

for(let i=0; i<A.length; i++) {
    const node = A[i];
    graph[node[0]].push(node[1])
    graph[node[1]].push(node[0])
}

console.log(graph)

function dfs(graph1) {
    const visited = new Array(N+1).fill(0); //
    const needVisit = [1];

    while(needVisit.length!==0) {
        const node = needVisit.pop();
        if(visited[node]===0) {
            visited[node]=1;
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

//0909 다시 해본 결과 아래도 정답임
//결국 런타임 원인은 graph를 비효율적으로 만들어서 그렇다
//visited를 includes 하는 것은 이 문제에 한해서는 문제가 안되었다 
//하지만 어떻게 될 지 모르니 0000 초기화해서 index로 접근해 체크하는 습관을 들이자

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let [N, C, ...A] = fs.readFileSync(filePath).toString().trim().split("\n")
// N=Number(N);
// A = A.map(e=>e.split(" ").map(Number))

// // console.log(A)

// const graph = {};
// for(let i=1; i<=N; i++) {
//     graph[i] = [];
// }

// for(let i=0; i<C; i++) {
//     const node = A[i];
//     graph[node[0]].push(node[1]);
//     graph[node[1]].push(node[0]);
// }
// // console.log(graph)

// function dfs(graph1) {
//     const visited = [];
//     const needVisit = [1];

//     while(needVisit.length!==0) {
//         const node = needVisit.pop();
//         if(!visited.includes(node)) {
//             visited.push(node);
//             needVisit.push(...graph1[node])
//         }
//     }
//     console.log(visited.length-1)
// }

// dfs(graph)























//실패의 흔적들 

// const graph = Array(N+1).fill().map(i=>[]);
// for(let edge of A) {
//     const [start, end] = edge.split(" ").map(i=>+i);
//     graph[start].push(end);
//     graph[end].push(start);
// }

// function dfs(graph, start) {
//     const visited = [];
//     let needVisit = [];
//     let count = 0;

//     needVisit.push(start);
    
//     while(needVisit.length !== 0) {
//         const node = needVisit.shift();
//         if(!visited.includes(node)) {
//             visited.push(node);
//             count++;
//             console.log("node", node)
//             needVisit = [...graph[node], ...needVisit]
//         }
//     }

//     return count;
// }

// // console.log(N, C, A)
// const graph = makeObjEdge(A)
// console.log(graph)
// console.log(dfs(graph, 1))

// //런타임 에러 이유 모르겠음
// //visited.length-1로도 해봤는데 동일하게 94%에서 런타임에러 
// //지금 주석의 그래프로 변형해서 해봐야하나.. 




// const fs = require('fs')
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
// const n = Number(input.shift()) //컴퓨터의 개수
// const m = Number(input.shift()) //간선의 개수
// let adjList = {}
// for(let i = 1;i<=n;i++)
// {
//     adjList[i] = []
// }

// //bfs와 dfs를 구현하기 위해 visited를 false로 초기화 시키는 함수 구현
// function setVisited(){
//     let visited = {}
//     for(let i = 1;i<=n;i++)
//     {
//         visited[i] = false
//     }
//     return visited
// }

// //인접리스트 구현
// for(let i = 0;i<m;i++)
// {
//     //각 line에 해당하는 간선
//     let edge = input[i].split(' ').map(item=>+item)
//     adjList[edge[0]].push(edge[1])
//     adjList[edge[1]].push(edge[0])
// }

// // console.log(adjList)

// function bfs(startVertex)
// {
//     //방문한 노드를 저장하는 객체 (초기값 false)
//     let visited = setVisited()
//     //방문할 노드를 저장하는 변수
//     let needVisit = []
//     needVisit.push(startVertex)
//     visited[startVertex] = true
//     //몇개의 노드를 방문하는지 확인하는 변수
//     let cnt = 0
//     //방문할 노드가 없을때까지 반복
//     while(needVisit.length)
//     {
//         //방문하는 노드 계산
//         cnt++;
//         let currentVertex = needVisit.shift()
//         //연결된 노드들 각각에 대한 탐색 ex) 1일때 -> 2,5 확인
//         adjList[currentVertex].forEach(item=> {
//             //탐색하는 노드가 방문을 하지 않았을때
//             if (visited[item] === false)
//             {
//                 //방문했다고 변경
//                 visited[item] = true
//                 //방문할 노드에 push
//                 needVisit.push(item)
//             }
//         })
//     }

//     //1번 컴퓨터를 제외하고 계산
//     return cnt-1
// }


// console.log(bfs(1))