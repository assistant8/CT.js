const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NM, ...A] = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, M] = NM.split(" ").map(Number);
A = A.map(e=>e.split("").map(Number))

console.log(BFS())
// console.log(A)

function BFS() {
    const visited = [];
    const needVisit = [[0,0]];
    const x = [0, 0, 1, -1];
    const y = [1, -1, 0, 0];

    while(needVisit.length!==0) {
        // console.log(needVisit)
        const [p,q] = needVisit.shift();
        
        if(A[p][q]!==0) {
            for(let j=0; j<4; j++) { 
                const X = p+x[j];
                const Y = q+y[j];
                if(X>-1 && X<N && Y>-1 && Y<M) {
                    if(A[X][Y] === 1 && !(X===0 && Y===0)) {
                        needVisit.push([X,Y]);
                        A[X][Y] = A[p][q]+1; //앞으로 갈 곳에 거리 할당
                    }                         
                }
            }
        }
        if(p===N-1 && q===M-1) break;
    }

    return A[N-1][M-1];
}

//bfs에서 최소 거리를 찾으려는데 count에서 최단거리에 속하지 않은 경로들을 어떻게 쳐낼 것인가 
//visit 대용인 그래프에 간곳에 +1씩 하는 방법으로 목적지에서의 값을 리턴하는 방법인데
    //이것은 사방으로 같은 값 (기준되는 곳 +1)을 더해줌으로 위 구현 가능 