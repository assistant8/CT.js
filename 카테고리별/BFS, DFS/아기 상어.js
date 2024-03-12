const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...array] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
array = array.map(e => e.split(" ").map(Number));

let shark = 2;
let current = [];
let second = 0;
let meal = 0;

for(let i=0; i<N; i++) {
    for(let k=0; k<N; k++) {
        if(array[i][k]===9){
            current = [i, k];
            array[i][k] = 0;
        }
    }
}

while(1) {
    const response = bfs(current);
    if(response.length === 0) {
        console.log(second);
        return;
    }
    const [count, [x, y]] = response;
    current = [x, y];
    second += count;

    meal++;
    if(meal === shark) {
        meal = 0;
        shark++;
    }
}

function bfs(start) {
    let copy = array.map(e => [...e]);
    let needVisit = [[start, 0]];
    let candidate = [];
    let minDistance = Infinity; // 가장 먼저 도달한 물고기까지의 거리

    while(needVisit.length) {
        const [[a,b], count] = needVisit.shift();
        if(count >= minDistance) break;
        const dx = [0, 0, -1, 1];
        const dy = [1, -1, 0, 0];

        for(let i=0; i<4; i++) {
            const x = dx[i] + a;
            const y = dy[i] + b;
            if(x >= 0 && x < N && y >= 0 && y < N) { // 벽 아니고
                if(copy[x][y]!==0 && copy[x][y] < shark) { // 자신보다 작은 물고기 마주치면
                    minDistance = count + 1;
                    candidate.push([x,y]);
                    copy[x][y] = 10000;
                }
                else if(copy[x][y]===0 || copy[x][y]===shark) { // 방문 안한 빈자리거나 같은 크기의 물고기면 방문
                    copy[x][y] = 10000; // 방문 처리
                    needVisit.push([[x,y], count+1]);
                }
            }
        }
    }

    if(!candidate.length) return []; // 위 while문 종료 조건 

    let up = 21;
    let left = 21;
    let target = [];
    for(let i=0; i<candidate.length; i++) {
        const [x, y] = candidate[i];
        if(x === up) {
            if(y < left) {
                left = y;
                target = candidate[i];
            }
        }
        if(x < up) {
            up = x;
            left = y;
            target = candidate[i];
        }
    }

    array[target[0]][target[1]] = 0;

    return [minDistance, target];
}

// 아기 상어 크기는 전역변수 

// 물고기 먹으러 갈때마다 bfs 돌림
    // 돌릴때마다 bfs 함수에서 count를 전체 sec에 더해줌
    // 물고기 먹을 때마다 (돌릴 때마다) 상어 크기에 +, 그 자리 0
    // bfs 돌릴때마다 현재 array 복사해줘야 함 - visited하면서 체크하기 때문 (상어크기 + 1)
        // bfs 처음에 copy하고 먹은 자리는 array를 바꿔줌 
    // bfs 함수에서 가는 길에 자신보다 큰 수면, 벽이면 못감 

// 같은 거리의 물고기면
    // 가장 위 물고기
    // 같다면 가장 왼쪽 물고기 

// 디버깅!!!!!!
// 애초에 방문처리를 그래프에 할거면 말도 안되는 수로 (7로 해서 shark>=7 되었을 때 오류)
// 이중 배열에서 idx 1이 최소, 동일하다면 2이 최소인 노드를 구하려는데
    // left = y; 빼먹지 않기 
    // 정렬해도 큰 시간 차이 없다 nlogn vs n
// copy와 원본 array 분간 잘하기 