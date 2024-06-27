const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NM, str, ACGT] = fs.readFileSync(filePath).toString().trim().split("\n");
const array = str.split("");
const [N, M] = NM.split(" ").map(Number);
const [A, C, G, T] = ACGT.split(" ").map(Number);
const obj = {"A": A, "C": C, "G": G, "T": T};

let count = 0;
let left = 0;
let right = M-1;
const map = new Map([['A', 0], ['C', 0], ['G', 0], ['T', 0]]);
for(let i=0; i<M; i++) {
    const char = array[i];
    if(char === "A" || char === "C" || char === "G" || char === "T") {
        map.set(char, map.get(char)+1);
    }
}
console.log(left, right, map);
check();

while(right+1 < N) {
    const leftChar = array[left];
    map.set(leftChar, map.get(leftChar)-1);
    left++;

    right++;
    const rightChar = array[right];
    map.set(rightChar, map.get(rightChar)+1);

    console.log(left, right, map)

    check();
}

function check() {
    for(const [key, value] of map) {
        if(value < obj[key]) return;
    }
    count++;
}

console.log(count);

// 처음 윈도우만큼 map 초기화

// 끝까지 윈도우 오른쪽으로 한칸씩 옮겨가며 체크
    // left 문자 map에서 -1 (음수 방지), left++
    // right++, right 문자 map + 1
    // 이렇게 했을 때 map이 기준 이상이면 count++

// N만큼 떼어서 매번 count를 하는 것이 아니라, 윈도잉을 통해 left, right만 업데이트