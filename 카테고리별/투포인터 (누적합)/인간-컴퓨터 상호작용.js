const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [S, q, ...array] = fs.readFileSync(filePath).toString().trim().split("\n");
array = array.map(e => e.split(" ").map((e,i)=> {if(i>0) return Number(e); else return e}));
// console.log(array)

// 10^5 이기 때문에 o(n^2)되면 안됨 = 한 문제 당 한번씩 문자열 새로 훑기 불가
// 모든 알파벳은 각 누적합을 갖고 있음
// 누적합으로 각 원소까지 알파벳의 개수 저장
// 각 문제마다 누적합 배열로 원소 출력 - 한번에 출력

const leng = S.length;
const answer = [];
const sumArr = Array.from(Array(26));

for(let i=0; i<q; i++) {
    const [char, start, end] = array[i];
    const code = char.charCodeAt();
    if(!sumArr[code]) {
        sumArr[code] = new Array(leng).fill(0);
        sumArr[code][0] = S[0] == char ? 1 : 0;
        for(let k=1; k<=leng; k++) {
            sumArr[code][k] = sumArr[code][k-1] + (S[k] == char ? 1 : 0);
        }
    }
    // console.log(code, sumArr[code])

    const count = sumArr[code][end] - (start===0 ? 0 : sumArr[code][start-1]);
    answer.push(count);
}

console.log(answer.join("\n"));

// 처음엔 알파벳 하나만 있는걸로 생각해서 틀림
// 누적합 배열을 q에 존재하는 알파벳으로만 만듦
// 이중 for문 이지만 최악의 경우에도 k는 알파벳 전체 수인 26번만 루프 = O(N)
// q를 돌면서 해당 알파벳 누적합이 있으면 그걸로 탐색 / 없으면 만들고 탐색