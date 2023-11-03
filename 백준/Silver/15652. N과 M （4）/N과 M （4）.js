const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

//중복조합 

function solution(n, m) {
    const seq = new Array(m).fill(0);
    const visited = new Array(n+1).fill(0);
    let result = "";
    
    function dfs(k, idx) {
        if(k===m) {
            const arr = seq.slice();
            result += `${arr.join(" ")} \n`;
            return;
        }

        for(let i=idx; i<=n; i++) {
            // if(visited[i]!==0) continue;
            seq[k] = i;
            visited[i]=1;
            dfs(k+1, i);
            visited[i]=0;
        }
    }

    dfs(0, 1);
    return result;  
}

const sol = solution(N, M);
console.log(sol)