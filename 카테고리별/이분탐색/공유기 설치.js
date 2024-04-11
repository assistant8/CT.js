const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NC, ...array] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, C] = NC.split(" ").map(Number);
array = array.map(Number);

array.sort((a,b)=>a-b);
let left = 1;
let right = array[N-1] - array[0];
let answer;

while(left <= right) {
    let mid = Math.floor((right+left)/2); //최소 기준거리
    let count = 1; //설치 개수
    let prev = array[0];

    for(let i=0; i<array.length; i++) {
        if(mid <= array[i]-prev) {
            prev = array[i];
            count++;
        } 
    }

    if(count >= C) { //충분히 가능했다, 간격 늘려보자
        left = mid + 1;
        answer = mid; // 과정이 아닌 답을 위함 - 이게 마지막 반복문일 때를 대비해
    } else {
        right = mid - 1;
    }
}

console.log(answer);

// 조합으로 될텐데 시간초과 날거다
// 구할 것 = 해당 케이스의 최소 거리 중 최대 거리 구하기 
// 이분 탐색으로 해당 케이스에 적용할 기준 최소 거리 정함
    // 그 기준 거리로 케이스에 설치해보기 
    // 기준 거리보다 작으면 다음 집에 설치 

// mid를 바로 리턴하면 안되는게 해당 mid로 했는데 조건이 안맞을 수도 있음. 
    // 가능 시에만 mid를 갱신하도록 answer를 따로 만들기

// 결국 최대값을 구해야하니 최대한 멀리 떨어져있어야하므로 array[0]에는 무조건 설치