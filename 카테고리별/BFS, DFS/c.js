// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ");
// K = Number(K);

// const arr = N.split("").map(Number);
// console.log(arr);

// const visited = Array.from(Array(K), () => Array(400 + 1).fill(false));

// function swap(a, b) {
//   [arr[a], arr[b]] = [arr[b], arr[a]];
// }

// const result = [];

// function dfs(level = 0) {
//   const num = Number(arr.join(""));

//   if (level === K) {
//     //끝에 도달 시 max 판단
//     result.push(num);
//     return;
//   }
//   console.log("level, num", level, num);
//   if (visited[level][num]) return; //같은 레벨에 같은 결과 나오면

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       swap(i, j);
//       dfs(level + 1);
//     }
//   }
// }

// dfs();
// console.log(result);


function combination(n,m) {
    const seq = new Array(m).fill(0);
    const visited = new Array(n+1).fill(0);
    const result = [];

    function dfs(level, idx) { //i를 받아 idx로 전달 
        if(level===m) {
            result.push([...seq]);
            return result
        }
        for(let i=idx; i<=n; i++) { //idx부터 시작 
            if(visited[i]===1) continue;
            seq[level]=i;
            visited[i]=1;
            dfs(level+1, i); //현재 i를 다음 dfs의 시작점(idx)으로 둠
            visited[i]=0; //자신의 자식들은 visited[i]=1 를 적용시킨 상태에서 뻗어져나가게 하고 sibling으로 갈 땐 원상복구 시켜야지 (dfs의 특성)
        }
    }

    dfs(0,1); //내 visited는 1부터 시작하니 
    return result
}

// console.log(combination(4,2))

// n개 중에 2개의 조합 
function getCombinationTwo(n) {
    const seq = new Array(2).fill(0);
    const visited = new Array(n+1).fill(0);
    const result = [];

    function dfs(level, k) {
        if(level === 2) {
            result.push([...seq]);
            return;
        }

        for(let i=k; i<=n; i++) {
            if(visited[i]) continue;
            seq[level] = i;
            visited[i] = true;
            dfs(level+1, i);
            visited[i] = false;
        }
    }
    dfs(0,1);
    return result;
}

function getCombinationTwo2(n) {
    const result = [];

    for(let i=1; i<=n; i++) {
        for(let k=i+1; k<=n; k++) {
            result.push([i,k]);
        }
    }

    return result;
}

console.log(getCombinationTwo(5));
console.log(getCombinationTwo2(5));
