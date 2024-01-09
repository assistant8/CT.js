function solution(edges) {
    let obj = {}; //생성 정점 구하기 위한
    let origin; //생성 정점
    let graphNum; //그래프 개수 
    let graph = {}; //연결 상태 객체 
    let answer = [0,0,0,0];
    
    //생성 정점 + 그룹 개수 구하기 
    for(let i=0; i<edges.length; i++) {
        const [a,b] = edges[i];
        obj[a] = (obj[a] || 0)+1;
        obj[b] = (obj[b] || 0)-1000;
    }
    let max = 1;
    for(let node in obj) {
        if(obj[node] > max) {
            origin = node;
            max = obj[node];
        }
    }
    graphNum = max;
    
    //bfs 위해 그래프 생성 
    for(let node of edges) {
        const [a,b] = node;
        if(origin == a) continue;
        if(!graph[a]) graph[a] = [];
        graph[a].push(b);
    }
    console.log(graph)
    
    //생성점에서 연결 시작점 first 
    const first = [];
    edges.forEach(e => {
        const [a,b] = e;
        if(a == origin) first.push(b);
    })
    
    console.log(first)
    
    //각 first에서 bfs해서 그 그룹의 노드 개수 알아내기
    for(let node of first) {
        if(!graph[node]) {
            answer[2]++;
            continue;
        }
        bfs(node);
        // 여기서 각 그룹에서 visited 배열로 어떤 정점이 있는지 구하고
        // 그 정점이 포함된 간선의 개수를 구함
        // 정점 개수와 간선 개수를 비교해서 어느 그래프인지 판단 
    }
    
    //bfs 함수 
    function bfs(start) {
        let idx = 0;
        const needVisit = [start];
        const visited = Array(edges.length).fill(0); //일단 크게 잡기
        
        while(needVisit[idx]) {
            const node = needVisit[idx];
            idx++;
            visited[node] = 1;
            for(let next of graph[node]) {
                if(visited[next]===0) needVisit.push(next);
            }
        }
        console.log("visited", idx)
    }
}

solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]])
solution([[2, 3], [4, 3], [1, 1], [2, 1]]	)
//생성 정점은 나가는 간선만 2이상 - 나가는 간선이 그래프의 개수임 

//정점과 간선 개수로 해볼까 
//생성 정점 포함된 간선 제외하고 
//도넛
//막대
//8자 

//bfs

//그래프를 만드는 이유 - edges 저대로 out->in 재귀 할 수 있지만 한번 할때마다 edge 다돌아야함











///////////////////////////////
// function solution(edges) {
//     let obj = {}; //생성 정점 구하기 위한
//     let origin; //생성 정점
//     let groupNum = 1; //그래프 개수 
//     let answer = [0,0,0,0];
    
//     //생성 정점 + 그룹 개수 구하기 
//     for(let i=0; i<edges.length; i++) {
//         const [a,b] = edges[i];
//         obj[a] = (obj[a] || 0)+1;
//         obj[b] = (obj[b] || 0)-1000;
//     }
//     for(let node in obj) {
//         if(obj[node] > groupNum) { // max 역할 
//             origin = node;
//             groupNum = obj[node];
//         }
//     }
    
//     //생성점에서 연결 시작점 first 
//     const first = [];
//     edges.forEach(e => {
//         const [a,b] = e;
//         if(a == origin) first.push(b);
//     })
    
//     console.log(first)
// }

// solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]])
// solution([[2, 3], [4, 3], [1, 1], [2, 1]])

//각 그룹마다 size에 상관없이 독보적으로 가지고 있는 특징을 이용해야했음 

//생성 정점은 out이 2개 이상, in이 없음
//막대는 out 없는게 1개, in 없는게 1개 있음 (둘이 동일할수도)
//8자는 한 점이 out 2, in 2 이렇게 있음 