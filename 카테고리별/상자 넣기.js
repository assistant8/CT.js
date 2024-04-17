const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, array] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
array = array.split(" ").map(Number);

let dp = Array(N).fill(1);

for(let i=0; i<N; i++) {
    let temp = [];
    for(let k=0; k<i; k++) {
        if(array[k]<array[i]) {
            temp.push(k); //dp를 받아야하기 떄문에 idx
        }
    }

    let max = 0;
    for(let k=0; k<temp.length; k++) {
        if(dp[temp[k]] > max) max = dp[temp[k]];
    }
    dp[i] = max + 1;
}

console.log(Math.max(...dp))

// 패드 그림 참고

// dp 배열 값은 해당 배열까지 만들 수 있는 LIS의 길이임 
// dp는 일부 dp값 초기화 하고, 그 값 이용해서 나머지 dp 값을 채운다. 특정 dp 값은 구하려는 해의 "특정 idx 까지의 부분 해"이다.

// 4일 때 array 중 작은 애들인 1,2,3의 dp 값 중 가장 큰 3을 가져옴. 4 자리의 dp에 3+1을 저장
// 결국 자신의 dp 값은 이전 배열 중 자신보다 작은 애들의 dp값을 이용해서 할당한다 

// 시간복잡도 = n^2 이므로 가능할때만 이렇게 
