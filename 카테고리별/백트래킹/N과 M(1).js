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

// main();






//난 위처럼 순열을 구했고
//ㄹㅇ 백트래킹 재귀 - 둘의 시간 차이가 큰 듯 - 위는 2000ms, 아래는 200ms 
// https://velog.io/@dev-redo/%EB%B0%B1%EC%A4%80-15649%EB%B2%88-N%EA%B3%BC-M1-NodeJS


function solution(n,m) { //4개 숫자 중 3개로 순열 만들기 
  const seq = [...Array(m)].fill(0); //[0,0,0]
  const visited = [...Array(n+1)].fill(false); //[0,0,0,0,0] 보기 쉽게 0은 안쓰고 index 1.2.3.4만 사용하도록 
  let result = [];

  function dfs(k) { 
      if (k === m) {
          const arr = [];
          for (let i=0; i<m; i++) { //0,1,2
              arr.push(seq[i]);
          }
          console.log("insert", arr)
          return result.push(arr)
      }

      for (let i=1; i<=n; i++) { //1,2,3,4
        console.log(seq)
          if (!visited[i]) {
              seq[k] = i; //i 사용
              visited[i] = true; //i 사용 표시 
              dfs(k+1); //k는 자릿수를 나타냄 
              visited[i] = false; //seq 완성해서 리턴 후, 뒤 숫자부터 안썼다 처리시킴
          }
      }
  }
  
  dfs(0);
  return result;
}


//이건 그냥 내가 이해한대로 짠거 - 위 코드와 동일 로직 
function solution(n, m) { //4P3
    const seq = new Array(m).fill(0);
    const visited = new Array(n+1).fill(0);
    const result = [];

    function dfs(k) {
        if(k===m) {
            const arr = seq.slice();
            console.log(arr);
            result.push(arr);
            return 
        }
        for(let i=1; i<=n; i++) {
            if(visited[i]===0) { //i 사용 안했으면 
                seq[k] = i; //i 사용
                visited[i]=1; //i 사용 표시
                dfs(k+1);
                visited[i]=0;
            }
        }
    }

    dfs(0);
    return result;
}

const sol = solution(4,3)
console.log(sol)