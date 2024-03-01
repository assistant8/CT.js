const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, target, M, ...array] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
M = Number(M);
const [target1, target2] = target.split(" ").map(Number);
const relations = array.map(e => e.split(" ").map(Number));
// console.log(relations)

const graph = new Map();

for(let i=1; i<=N; i++) {
    graph.set(i, []);
}

for(let i=0; i<relations.length; i++) {
    const [a,b] = relations[i];
    graph.get(a).push(b);
    graph.get(b).push(a);
}

// console.log(graph);

function bfs() {
    const visited = new Array(N+1).fill(0);
    const needVisit = [[target1,0]];

    while(needVisit.length) {
        const [node,count] = needVisit.shift(); //대기열에서 꺼내고
        if(node===target2) return count; //꺼냈는데 타겟이면 거리 리턴
        const relation = graph.get(node); //꺼낸거의 이웃 배열

        for(let i=0; i<relation.length; i++) { //이웃 배열 반복문 - 하나씩 넣어주는 방법
            const one = relation[i];
            if(!visited[one]) { //이웃 배열 미방문 시 대기열에 push, 방문 처리
                needVisit.push([one, count+1]);
                visited[one] = 1;
            }
        }
    }
}

bfs() ? console.log(bfs()) : console.log(-1)

// 여러 방법으로 타겟에 갈 수 있으니 bfs로 최단촌수 구하기