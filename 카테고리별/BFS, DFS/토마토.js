const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [MN, ...graph] = fs.readFileSync(filePath).toString().trim().split("\n")
let [M,N]=MN.split(" ").map(Number)
graph = graph.map(e=>e.split(" ").map(Number))

function BFS(first) {
    // console.log("first", first)
    const needVisit = first.map(e=>[e,0]);
    let frontIdx = 0;
    const x = [0, 0, 1, -1];
    const y = [1, -1, 0, 0];
    
    while(needVisit.length!==0) {
        // console.log("needVisit", needVisit)
        const [[p,q], depth] = needVisit[frontIdx];
        frontIdx++;
        if(graph[p][q]===0 || depth===0) { //미 방문 시 or 초기지점 
            graph[p][q]++; //방문 처리 
            for(let j=0; j<4; j++) { //사방으로 
                const X = p+x[j];
                const Y = q+y[j];
                if(X>-1 && X<N && Y>-1 && Y<M) {
                    if(graph[X][Y] === 0) {
                        needVisit.push([[X,Y], depth+1]) //사방 중에 미방문된 곳은 need에 푸시 
                    }                        
                }
            }
        }
        // console.log("need", needVisit, frontIdx)
        if(needVisit.length===frontIdx) {
            for(const row of graph) {
                if(row.includes(0)) return -1
            }
            return depth
        }
    }
}

const firstArray = [];
for(let i=0; i<N; i++) {
    for(let k=0; k<M; k++) {
        if(graph[i][k]===1) firstArray.push([i,k])
    }
}
console.log("firstArray", firstArray)

console.log(BFS(firstArray))
// console.log(graph)


//-1인 곳은 가면 안되고, 시작점이 여러곳일 수 있다
//종료 조건은 모두 방문 (0이 없음), 그러나 최소 시간 
    //그래프에 0 체크보단 알아서 needvisit이 다 갈거라 생각했는데 
    //도달할 수 없는 0이 있다면 -1 리턴해야하므로 그래프 체크 
//초기점 여러곳은.. 어떻게 동시에 depth를 기록할지 
    //그냥 초기값에 배열로 넣으면 될 듯 (needvisit에 배열 박아버리기)

//forEach에선 return도 안먹힘
//초기지점이 이미 1이면 if(graph[p][q]===0 || depth===0) 처리

//시간초과 -> shift를 idx로 변경 
// https://mine-it-record.tistory.com/530 참고해보자 