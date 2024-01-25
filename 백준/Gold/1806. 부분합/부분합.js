const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NS, array] = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, S] = NS.split(" ").map(Number);
array = array.split(" ").map(Number);

// left를 처음부터 끝까지 돌리되 (최소를 구해야 하니)
// 길이 1 (그 자체로 target 이상이면) return 1 - left==right로?
// 끝까지 돌렸는데 합 안되면 return 0

// 부분합 s이상이면 l과r 차이 min과 비교 후 min 대입, left++
// s 이하이면 right++
// left++ 했으면 sum-array[left], right++ 이면 sum+array[right]

function solution() {
    let left = 0;
    let right = 0;
    let min = Infinity;
    let sum = array[0];

    while(right < N) { //left가 범위 벗어나면 끝 
        if(sum >= S) {
            let leng = right-left+1;
            if(leng < min) min = leng;
            sum -= array[left];
            left++;
        } else {
            right++;
            sum += array[right];
        }
    }
    return (min == Infinity ? 0 : min);
}

console.log(solution());