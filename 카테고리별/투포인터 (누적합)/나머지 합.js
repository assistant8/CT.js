const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NM, array] = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, M] = NM.split(' ').map(Number);
array = array.split(" ").map(Number);

// 누적합을 이용하는데, 모든 조합의 구간을 다 구해봐야 함
// 00 01 11 02 12 22 ... 1+3+6+10...
// => n^2임((n(n+1)/2)), for문 2개 필요 
// 10^6^2 이라 10^8 넘어감 

// 그래서 다른 방법 (위 방법 처럼 모두 구하는건 절대 안됨!)
// 구간합 (누적합i-누적합k)이 3으로 나눠 떨어지려면 두 누적합의 3으로 나눈 나머지가 동일하면 됨
// 결국 누적합 배열을 아예 3으로 나눈 나머지로 저장 후
// 0은 누적합i 자체로 3으로 떨어지니 더해주고
// 0,1,2 각각 개수 종합해서 nc2 해줘서 위꺼랑 총합이 정답 
// (위 설명은 m=3일 때 예시)

let answer = 0;
const countArr = new Array(M).fill(0);

let sumArr = new Array(N);
sumArr[0] = array[0] % M;
countArr[sumArr[0]]++;
for(let i=1; i<N; i++) {
    sumArr[i] = (sumArr[i-1] + array[i])%M;
    countArr[sumArr[i]]++;
}
// console.log(sumArr)
// console.log(countArr)

answer += countArr[0];
for(let i=0; i<M; i++) {
    answer+=getCombination(countArr[i]);
}

console.log(answer)

// nC2라 이항계수 성질 이용한 조합 경우의 수
function getCombination(k) {
    return (k*(k-1))/2;
}