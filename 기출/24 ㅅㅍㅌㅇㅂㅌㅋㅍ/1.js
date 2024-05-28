const input = ["2 9 10 21 24"];
const array = input[0].split(" ");
const leng = array.length;

if(leng > 9) {
    console.log(-1);
    return;
}

for (let i = 0; i < leng; i++) {
    const number = Number(array[i]);
    if(number > 999 ||(number >= 100 && leng > 9)) {
        console.log(-1);
        return;
    }
}

const seq = [...Array(leng)].fill(0); 
const visited = [...Array(leng + 1)].fill(false); 
let result = [];
let max = -Infinity;
let min = Infinity;

function dfs(k) {
  if (k === leng) {
    const num = Number(seq.slice().join(""));
    if(max < num) max = num;
    if(min > num) min = num;
    return;
  }

  for (let i = 1; i <= leng; i++) {
    if (!visited[i]) {
      seq[k] = array[i-1]; //i 사용
      visited[i] = true; //i 사용 표시
      dfs(k + 1); //k는 자릿수를 나타냄
      visited[i] = false; //seq 완성해서 리턴 후, 뒤 숫자부터 안썼다 처리시킴
    }
  }
}

dfs(0);
console.log(max, min)
console.log(max + min);

// 위는 4P4를 통해 모든 경우의 수 비교, n이 작아서 가능했음

// 아래는 2,21이 있을 때 221 vs 212 비교하여 sort 
  // sort는 앞 뒤를 가지고 연산하여 그 값을 비교해 뒤바꾸면 정렬하는 거임 
  // 2 > 21 

const input2 = input[0].split(" ");
console.log(input2)
input2.sort((a,b)=>(b+a)-(a+b));
console.log(input2)
input2.sort((a,b)=>(a+b)-(b+a));
console.log(input2)