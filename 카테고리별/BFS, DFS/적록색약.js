const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...array] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
array = array.map((e) => e.split(""));
// console.log(array);

let count1 = 0;
let count2 = 0;
let visited = Array.from(Array(N), () => Array(N).fill(0));

for(let mode = 0; mode < 2; mode++) {
    if(mode === 1) {
        visited.forEach(e => e.fill(0));
        array.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                if (col === 'G') {
                    array[rowIndex][colIndex] = 'R';
                }
            });
        });        
    }
    for (let i = 0; i < N; i++) {
      for (let k = 0; k < N; k++) {
        if(visited[i][k] === 0) {
            dfs(i, k, array[i][k]);
            if(mode === 0) count1++;
            else count2++;
        }
      }
    }
}

console.log(count1, count2)

function dfs(n, m, color) {
    const needVisit = [[n, m]];

    while(needVisit.length) {
        const [x,y] = needVisit.pop();
        const dx = [0, 0, -1, 1];
        const dy = [1, -1, 0, 0];

        for(let i=0; i<4; i++) {
            const x1 = x + dx[i];
            const y1 = y + dy[i];
            if(x1 >= 0 && x1 < N && y1 >= 0 && y1 < N) {
                if(color === array[x1][y1] && visited[x1][y1]===0) {
                    visited[x1][y1] = 1;
                    needVisit.push([x1, y1]);
                }
            }
        }
    }
}

// 먼저 배열 일일이 탐색하면서 visited 아닌 곳 찾으면 dfs 시작 (반복문)

// dfs
    // initial 값과 같은 애 4방면으로 탐색해가기   
    // 적록색맹은 g를 r로만 바꾸면 됨
    // (visited 초기화, count2 변수) 
