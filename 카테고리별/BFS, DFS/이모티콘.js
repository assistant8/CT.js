const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let target = fs.readFileSync(filePath).toString().trim();
target = Number(target);

// +clip, *2, -1

function bfs() {
    const needVisit = [[1, 0, 0]]; // 현재값, depth, clip
    let visited = Array.from(Array(1025), () => Array(1025).fill(0)); //value, clip
    
    while(needVisit.length) {
        const [value, depth, clip] = needVisit.shift();

        if(value===target) return depth; //타겟 시 리턴
        if(value < 0 || value > 1024) continue; //화면 개수
        if(visited[value][clip]) continue; //방문 시 넘어감
        visited[value][clip] = 1; //위 모두 통과 시 방문 처리

        for(let i=0; i<3; i++) {
            if(i===0) { //클립에 복사
                needVisit.push([value, depth+1, value]);
            } else if(i===1) { //화면에 덧붙이기
                if(clip===0) continue;
                needVisit.push([value+clip, depth+1, clip]);
            } else { //화면-1
                needVisit.push([value-1, depth+1, clip]);
            }
        }
    }
}

console.log(bfs());

// 각 노드는 계산된 값, 리턴되어야 할 깊이, 현재 클립보드 개수를 가져야 함 

// 3개의 원소가 중복가능하여 뻗어나가는 3 + 3*3*3 + ... 이기 때문에 시간 초과 
    // !!!!!!3개의 원소가 중복가능 => 이런 경우는 무조건 재방문 쳐내야 
    // 깊이는 상관없고, 각 상태인 값과 클립을 이차원 배열로 방문 처리 (노션 그림)
    // visited 배열은 노드의 고유한 값이어야 하는 2개 이하의 것을 visited 행열로 사용하자

// 런타임 에러 = (노션) 배열 idx 오버될때, 또는 너무 큰 배열을 선언할 때
// value = 현재화면의 개수이기 때문에 if(value < 0 || value > 1024) continue;
    // 음수 될 수 없고 1000이 되려면 1024보다는 작아야겠지 (해봤자 -1이기때문)

// bfs 특성 상 반복문, 즉 같은 부모 노드의 자식들끼리는 같은 depth 가져야 최소 depth를 구할 수 있음!
    // depth+1 등으로 통일, 안그러면 depth 큰게 작은것보다 먼저 shift 되어버릴 수도.

// visited나 0~1024 아닌 continue 해야될 노드를 needvisit에 넣기 전에 쳐내든지 넣고 빼서 자식으로 뻗어나가기 전에 쳐내든지
    // (넣기 전에 쳐내는게 idx overflow 문제 없고 반복문을 덜 돌긴 함)