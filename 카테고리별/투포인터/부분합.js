const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NS, array] = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, S] = NS.split(" ").map(Number);
array = array.split(" ").map(Number);

// left를 처음부터 끝까지 돌리되 (최소를 구해야 하니)
// 길이 1 (그 자체로 target 이상이면) return 1 (굳이긴 함)
// 끝까지 돌렸는데 합 안되면 return 0

// 부분합 s이상이면 l과r 차이 min과 비교 후 min 대입, left++
// s 이하이면 right++
// left++ 했으면 sum-array[left], right++ 이면 sum+array[right]

function solution() {
    let left = 0;
    let right = 0;
    let min = Infinity;
    let sum = array[0];

    while(right < N) { //right가 범위 벗어나면 끝 
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

// 연속 수열합 문제임 
// 기존 생각과 달리 left가 하나 증가할 때마다 right = left 부터 시작할 필요가 없다
// 그러면 부분합의 의미가 없어짐 - 그 left 단계에서 부분합을 구하기 위한 루프가 하나 더 필요
// 부분합 노트 그림 참고해봐라 이전 단계에서 한 걸로 커버됨
// 그래서 단순히 타겟보다 작으면 right 늘리고 크면 left 늘리고
