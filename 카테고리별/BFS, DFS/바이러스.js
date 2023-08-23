const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, C, ...A] = fs.readFileSync(filePath).toString().trim().split("\n")
N=Number(N);
A = A.map(e=>e.split(" ").map(Number))

function makeObjEdge(edges) {
    const obj = {};
    edges.forEach((e, i)=>{
        e.forEach((ee, ii)=>{
            if(ii===1) obj[ee] ? obj[ee].push(e[0]) : (obj[ee] = [e[0]])
            else obj[ee] ? obj[ee].push(e[1]) : (obj[ee] = [e[1]])
        })
    })
    return obj;
}

// const graph = Array(N+1).fill().map(i=>[]);
// for(let edge of A) {
//     const [start, end] = edge.split(" ").map(i=>+i);
//     graph[start].push(end);
//     graph[end].push(start);
// }

function dfs(graph, start) {
    const visited = [];
    let needVisit = [];
    let count = 0;

    needVisit.push(start);
    
    while(needVisit.length !== 0) {
        const node = needVisit.shift();
        if(!visited.includes(node)) {
            visited.push(node);
            count++;
            console.log("node", node)
            needVisit = [...graph[node], ...needVisit]
        }
    }

    return count;
}

// console.log(N, C, A)
const graph = makeObjEdge(A)
console.log(graph)
console.log(dfs(graph, 1))

//런타임 에러 이유 모르겠음
//visited.length-1로도 해봤는데 동일하게 94%에서 런타임에러 
//지금 주석의 그래프로 변형해서 해봐야하나.. 




const fs = require('fs')
// const input = fs.readFileSync('../text.txt').toString().trim().split('\n')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const n = Number(input.shift()) //컴퓨터의 개수
const m = Number(input.shift()) //간선의 개수
let adjList = {}
for(let i = 1;i<=n;i++)
{
    adjList[i] = []
}

//bfs와 dfs를 구현하기 위해 visited를 false로 초기화 시키는 함수 구현
function setVisited(){
    let visited = {}
    for(let i = 1;i<=n;i++)
    {
        visited[i] = false
    }
    return visited
}

//인접리스트 구현
for(let i = 0;i<m;i++)
{
    //각 line에 해당하는 간선
    let edge = input[i].split(' ').map(item=>+item)
    adjList[edge[0]].push(edge[1])
    adjList[edge[1]].push(edge[0])
}

// console.log(adjList)

function bfs(startVertex)
{
    //방문한 노드를 저장하는 객체 (초기값 false)
    let visited = setVisited()
    //방문할 노드를 저장하는 변수
    let needVisit = []
    needVisit.push(startVertex)
    visited[startVertex] = true
    //몇개의 노드를 방문하는지 확인하는 변수
    let cnt = 0
    //방문할 노드가 없을때까지 반복
    while(needVisit.length)
    {
        //방문하는 노드 계산
        cnt++;
        let currentVertex = needVisit.shift()
        //연결된 노드들 각각에 대한 탐색 ex) 1일때 -> 2,5 확인
        adjList[currentVertex].forEach(item=> {
            //탐색하는 노드가 방문을 하지 않았을때
            if (visited[item] === false)
            {
                //방문했다고 변경
                visited[item] = true
                //방문할 노드에 push
                needVisit.push(item)
            }
        })
    }

    //1번 컴퓨터를 제외하고 계산
    return cnt-1
}


console.log(bfs(1))