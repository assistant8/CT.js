const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(n, m) {
    const seq = new Array(m).fill(0);
    const visited = new Array(n+1).fill(0);
    let result = "";

    function dfs(k) {
        if(k===m) {
            const arr = seq.slice();
            result += arr.join(" ") + "\n";
            return;
        }
        for(let i=1; i<=n; i++) {
            // if(visited[i]!==0) continue;
            seq[k] = i;
            visited[i] = 1;
            dfs(k+1);
            visited[i] = 0;
        }
    }

    dfs(0);
    return result;
}

const sol = solution(N, M);
console.log(sol)

//중복순열 4,2 
// if(visited[i]!==0) continue; 
// 이 부분이 이전에 쓰인 수는 안쓴다는 것이니 삭제 

//콘솔을 반복문에서 불렀더니 시간초과
//한번에 string으로 만들고 출력 - 마지막 엔터있어도 맞네 