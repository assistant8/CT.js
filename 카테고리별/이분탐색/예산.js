const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, array, budget] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
budget = Number(budget);
array = array.split(" ").map(Number);

let left = 1;
let right = Math.max(...array);
let answer = 0;

while(left <= right) {
    let mid = Math.floor((left+right)/2); //상한값 
    let sum  = 0; //해당 mid 상한값으로 했을 때 총액

    for(let i=0; i<N; i++) {
        const want = array[i];
        if(want >= mid) sum += mid;
        else sum += want; 
    }
    
    if(sum > budget) { //총액이 예산 초과 시 상한값을 줄여야지
        right = mid - 1;
    } else { //총액이 예산에 딱 맞거나 예산이 남으면 상한값을 늘려야지.  이경우에만 상한값이 답이 될 수 있음
        if(mid>answer) answer = mid; //최대값을 구해야하니 기존 answer값보다 큰 경우에 갱신시켜줘야지 (여기선 필요없음)
        left = mid + 1;
    }
}

console.log(answer)