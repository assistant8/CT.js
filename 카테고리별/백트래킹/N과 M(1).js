const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function getPermutation(array, selectNumber) {
    const result = [];
    if(selectNumber===1) {
        return array.map(element=>[element]);
    }

    array.forEach((fixed, index, origin)=>{
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
        const permutations = getPermutation(rest, selectNumber-1);
        const attached = permutations.map(permutation=>[fixed, ...permutation]);
        result.push(...attached);
    })

    return result;
}


function main() {
    const array = Array.from(Array(N), (e, i)=>i+1)
    const result = getPermutation(array, M)
    result.forEach(e=>{
        console.log(e.join(" "))
    })
}

main();






//난 위처럼 순열을 구했고
//ㄹㅇ 백트래킹 재귀 - 둘의 시간 차이가 큰 듯 - 위는 2000ms, 아래는 200ms 
// https://velog.io/@dev-redo/%EB%B0%B1%EC%A4%80-15649%EB%B2%88-N%EA%B3%BC-M1-NodeJS
const [n, m] = [4, 2]
let answer = '';

const arr = [];
for (let i = 1; i <= n; i++) arr.push(i);

const visited = new Array(m).fill(false);
const selected = [];
function dfs(depth) {
  if (depth === m) {
    answer += `${selected.join(' ')}` + '\n';
    return;
  }

  for (let i = 0; i < n; i++) {
    console.log(selected);
    if (visited[i]) continue;

    selected.push(arr[i]);
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

// dfs(0);
// console.log(answer);