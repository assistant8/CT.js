const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

console.log(BFS(N, K))


function BFS(n, k) {
    const visited = Array.from(Array(100001).fill(0))
    const needVisit = [[n,0]];

    while(needVisit.length!==0) {
        const [node, depth] = needVisit.shift();
        if(node===k) return depth;
        if(visited[node]===0) {
            visited[node]=1;
            for(const next of [node-1, node+1, node*2]) {
                if(visited[next]===0) {
                    needVisit.push([next, depth+1])
                }
            }          
        }
    }
}


//이제껏 좌표로 했는데 이런 구조도 당연히 가능하다! (루트1->3->9...)
//depth를 구하려면 부모 노드의 정보를 토대로 +1 해야하므로 [node, depth]를 저장해둠
//그냥 count++로 하면 몇번째 원소인지만 나오기 때문 39...
//시간초과 -> visited [0,1,0,0] 형식으로 변환 -> needvisit에 넣을 때도 방문 여부 체크 추가 
// const visited = Array.from(Array(100001).fill(0))
// const visited = new Array(100001).fill(0) 동일 
// for(const next of [node-1, node+1, node*2])