function solution(n, edge) {
    var answer = 0;
    const edges = makeObjEdge(edge);
    return bfs(edges, 1)
}

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
    // console.log(visited)
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