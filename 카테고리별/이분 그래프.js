const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...array] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
array = array.map(e => e.split(" ").map(Number));

// 각 케이스마다 처리 
// 해당 간선을 이용해 그래프 만들기
for(let i=0; i<array.length; i++) {
    const [v, e] = array[i];
    let graph = {};
    for(let k=1; k<=v; k++) graph[k] = []; //
    for(let k=1; k<=e; k++) {
        const [a, b] = array[i+k];
        graph[a].push(b);
        graph[b].push(a);
    }
    // console.log('graph', graph)
    console.log(solution(v, graph))
    i += e;
}

// 각 케이스마다의 로직
function solution(num, graph) {
    let arr = Array(num+1).fill(0); // 0이면 미방문 (visited 역할이자 색칠 담당)

    // 비연결 그래프 고려 위해 모든 정점v에 대해 반복
    for(let v=1; v<=num; v++) {
        if(!arr[v]) {
            const needVisit = [[v, 1]];
            while(needVisit.length) {
                const [node, depth] = needVisit.pop();
                if(arr[node]===0) { //미방문 시 
                    let color = depth%2===0 ? 'r' : 'b'; //짝홀 이용하여 rb 번걸아 색칠
                    arr[node] = color; //색칠
                    for(let element of graph[node]) {
                        needVisit.push([element, depth+1])
                    }
                }
            }
        }
    }

    // 다시 탐색하면서 인접 노드 같은색인지 판별
    for(let key in graph) {
        const neighbor = graph[key];
        for(let i=0; i<neighbor.length; i++) {
            const node = neighbor[i];
            if(arr[key] === arr[node]) {
                return 'NO'
            }
        }
    }
    return 'YES'
}

// 이분 그래프는 모든 노드를 2가지 색으로 칠하되 인접 노드가 같은 색을 칠하지 않을 수 있는 그래프

// 각 케이스마다
    // 그래프 생성
    // 탐색하면서 색칠
    // 다시 탐색하면서 인접에 같은 색인지 판별 

// 디버깅
    // 비연결 그래프 위해 모든 정점의 그래프 [] 초기화 및 모든 정점 for문 돌기
    // a와 거기서 뻗어져나가는 여러 점들은 depth로 구분하여 짝홀로 구분, r b로 처리하여 접점 동일 색상인지 판단
    // 이는 bfs dfs 모두 가능 - 결국 모든 점 돌고난 후 판단해야되기 때문