const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ");
K = Number(K);

const arr = N.split("").map(Number);
// console.log(arr)

const visited = Array.from(Array(K+1), () => Array(1000000 + 1).fill(false));

function swap(a,b) {
    [arr[a],arr[b]] = [arr[b],arr[a]];
}

let max = -1;

function dfs(level=0) {
    const num = Number(arr.join(""));
    // console.log("level, num", level, num, visited[level][num])

    if(visited[level][num]) return; //같은 레벨에 같은 결과 나오면 
    else visited[level][num] = true;

    if(level===K) { //끝에 도달 시 max 판단
        if(max < num) max = num;
        // console.log(num, "!\n")
        return;
    }

    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            swap(i,j);
            if(!arr[0]==0) dfs(level+1);
            swap(i,j);
        }
    }
}

dfs();
console.log(max)

// 첫 문자가 0이면 다음 레벨에 들어가지 않고, 원상복구 시켜서 다음으로 넘어가야함 (ex: 90)
// swap 하는 2중 for문 부분도 dfs로 재귀 돌 수 있지만 nC2이기 때문에 for문 2개로 대체
    // M번 교환하는 것도 재귀, nC2로 swap할 거 고르는 것도 재귀
// dfs 재귀 구조는 크게 = level이 끝에 다다르면 return + 반복문에서 재귀함수 호출 + visited 처리 필요 시

// 배열로 스플릿 후
// visited를 k(단계) * 1000000 개로 만들기 
// swap 함수 정의
// 완전탐색 돌리기
    // 각 단계에서 swap하고 재귀
    // 각 단계에 해당 숫자가 나왔으면 return 종료 
    // swap 했는데 0이 첫문자면 return 끝내기 
    // 마지막 단계 도달 시 그거 result에 push
// result 중 최대값 



// dfs 다른 풀이
// arr을 같이 넘겨서 arr을 전역적으로 바꾼 것이 아닌 그 순간 새 배열을 만들어서 swap
// 0인 경우 원상복구 필요없이 continue 가능하지만, 시간 더 걸림 (new array 만드는)
const dfs2 = (NumArr, cnt) => {
    const num = +NumArr.join('');
  
    // 같은 연산횟수에 만들어진 적 있는 숫자인지
    if (isVisited[num][cnt]) return;
    isVisited[num][cnt] = true;
  
    // K번 연산 했으면 Max 갱신
    if (cnt === K) {
      Max = Math.max(Max, num);
      return;
    }
  
    for (let i = 0; i < Len - 1; i++) {
      for (let j = i + 1; j < Len; j++) {
        let newArr = [...NumArr];
        const temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
        if (newArr[0] === '0') continue;
  
        dfs(newArr, cnt + 1);
      }
    }
  };