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
console.log(max + min);
