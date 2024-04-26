function solution(n, edge) {
    var answer = 0;
    const edges = makeObjEdge(edge);
    console.log("edges", edges)
    return bfs(edges, 1)
}
solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])

function bfs(edges, startingNode) {
    const visited = {}; //방문한
    const queue = []; //앞으로 방문할 곳
    
    visited[startingNode] = 0;
    queue.push(startingNode);
    
    let count = 0;
    while(queue.length > 0) { //큐 더이상 없을때까지
        const currentNode = queue.shift(); //큐 처음꺼 꺼내 현재노드
        
        const neighborNodes = edges[currentNode]; //obj에서 현재 노드가 key인 배열
        for(let i=0; i<neighborNodes.length; i++) {
            const neighborNode = neighborNodes[i];
            if(visited[neighborNode]===undefined) { //방문안한 노드면
                visited[neighborNode] = visited[currentNode]+1; //방문 체크 동시에 depth 카운트
                queue.push(neighborNode) //큐에 넣기
            }
        }
    }
    console.log("visited", visited)
    return getMaxValueKeysCount(visited)
}

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

function getMaxValueKeysCount(obj) {
  const values = Object.values(obj); // 객체의 값들로 이루어진 배열을 생성
  const maxValue = Math.max(...values); // 배열에서 최대값을 찾음
  const maxKeys = Object.keys(obj).filter(key => obj[key] === maxValue); // 최대값을 가지고 있는 키들을 필터링하여 배열 생성

  return maxKeys.length; // 최대값을 가지고 있는 키들의 개수를 반환
}

///////////////////
//240426
function solution(n, edge) {
    var answer = 0;
    const e = edge.length;
    const obj = {};
    for(let k=1; k<=n; k++) {
        obj[k] = [];
    }

    for(let i=0; i<e; i++) {
        const [start, end] = edge[i];
        obj[start].push(end);
        obj[end].push(start);
    }
    
    const visited = Array(n+1).fill(0);
    const needVisit = [[1, 0]];
    
    while(needVisit.length) {
        const [node, count] = needVisit.shift();
        for(let i=0; i<obj[node].length; i++) {
            const nextNode = obj[node][i];
            if(!visited[nextNode]) {
                needVisit.push([nextNode, count+1]);
                if(nextNode !== 1) visited[nextNode] = count+1;
            }
        }
    }
    
    let max = -1;
    visited.forEach((e,idx)=>{
        if(idx>1 && e>max) max = e;
    })
    visited.forEach(e => {if(max===e) answer++})
    return answer;
}

//노드 간 최단거리들을 일단 모두 구해야하니 bfs
//1번에서 시작한 bfs로 거리를 같이 넘겨주자
//다 끝나면 마지막에 한번 훑으면서 최대 노드 개수를 구해주자 