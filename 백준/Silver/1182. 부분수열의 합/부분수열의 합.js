const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NM, array] = fs.readFileSync(filePath).toString().trim().split("\n").map(e=>e.split(" ").map(Number))
let [N, M] = NM;

//////////////////////////
//그냥 조합인듯 

function solution(n, m) {
    const seq = new Array(m).fill(0);
    const visited = new Array(n+1).fill(0);
    let result = [];
    
    function dfs(k, idx) {
        if(k===m) {
            const arr = seq.slice();
            const sum = arr.reduce((a,b)=>a+b);
            if(sum===M) count++;
            return;
        }

        for(let i=idx; i<=n; i++) {
            if(visited[i]!==0) continue;
            seq[k] = array[i-1];
            visited[i]=1;
            dfs(k+1, i);
            visited[i]=0;
        }
    }

    dfs(0, 1);
    return result;  
}

let count = 0;
for(let i=1; i<=N; i++) {
    solution(N, i);
}
console.log(count)