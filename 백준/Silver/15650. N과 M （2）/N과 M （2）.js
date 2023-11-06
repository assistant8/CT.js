const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

//4C3
//기존과 다르게 2면 3,4만 봐야한다 - 자동으로 오름차순 되겠네 
//i가 결국 들어갈 실제 숫자임 i를 현재보다 크게 만들어야함 
function solution(n,m) {
    const seq = new Array(m).fill(0);
    const visited = new Array(n+1).fill(0);
    const result = [];

    function dfs(k, idx) { //i를 받아 idx로 전달 
        if(k===m) {
            const arr = seq.slice();
            result.push(arr);
            return result
        }
        for(let i=idx; i<=n; i++) { //idx부터 시작 
            if(visited[i]===1) continue;
            seq[k]=i;
            visited[i]=1;
            dfs(k+1, i); //현재 i를 다음 dfs의 시작점(idx)으로 둠
            visited[i]=0;
        }
    }

    dfs(0,1); //내 visited는 1부터 시작하니 
    return result
}

const sol = solution(N,M);
sol.forEach(e=>{
    console.log(e.join(" "))
})