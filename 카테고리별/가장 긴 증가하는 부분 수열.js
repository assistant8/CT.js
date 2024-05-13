const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, array] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
array = array.split(" ").map(Number);

let dp = new Array(N).fill(1);
for(let i = 0; i < N; i++){
    let temp = [];
    for(let k = 0 ; k < i; k++){
        if(array[k]<array[i]){
            temp.push(k);
        }
    }

    let max = 0;
    for(let k=0; k<temp.length; k++) {
        const idx = temp[k] //array[i]보다 작은 애들 index
        if(dp[idx] > max) {
            max = dp[idx]
        }
    }
    dp[i] = max + 1;
}
console.log(Math.max(...dp));

// dp 배열 값은 해당 배열까지 만들 수 있는 LIS의 길이임 
// dp는 일부 dp값 초기화 하고, 그 값 이용해서 나머지 dp 값을 채운다. 특정 dp 값은 구하려는 해의 "특정 idx 까지의 부분 해"이다.

// 4일 때 array 중 작은 애들인 1,2,3의 dp 값 중 가장 큰 3을 가져옴. 4 자리의 dp에 3+1을 저장
// 결국 자신의 dp 값은 이전 배열 중 자신보다 작은 애들의 dp값을 이용해서 할당한다 


// 1,2,3,101,102가 되어버림 = greedy가 되어버리는 첫 풀이 
// let max = 0;
// for(let i=0; i<N; i++) { 
//     let count = 1;
//     let prev = array[i];
//     for(let k=i+1; k<N; k++) {
//         if(array[k] > prev) {
//             count++;
//             prev = array[k];
//         }
//     }
//     // console.log(count)
//     if(max < count) max = count;
// }

// console.log(max)



function sol() {
    let dp = Array(arr.length).fill(1);
    const arr = [100,1,2,3,101,4,5,6,102,7,8];

    for(let i=0; i<arr.length; i++) { //i는 현재 원소
        let temp = [];
        for(let k=0; k<i; k++) { //k는 이전 원소 중 i보다 작은 애들
            if(arr[i]>arr[k]) {
                temp.push(k);
            }
        }
        
        let max = 0;
        for(let j=0; j<temp.length; j++) {
            const idx = temp[j];
            if(max < dp[idx]) max = dp[idx];
        }
        dp[i] = max+1;
    }
    console.log(dp)
}

// sol();