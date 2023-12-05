// function solution(data) {
//     var answer = [];
//     const lastTime = data[data.length-1][1] + data[data.length-1][2];
//     let coolTime = 0;
//     let dcount = 0;
//     let doc;
//     let temp;
//     const queue = [];

//     for(let i=0; i<lastTime; i++) {
//         console.log("i", i)

//         if(i>=coolTime) {
//             if(data[dcount][1]===coolTime) {
//                 console.log("dcount", dcount)
//                 answer.push(data[dcount][0]);
//                 coolTime = i+data[dcount][2];
//                 dcount++;
//             } else if(data[dcount][1] === i) {
//                 answer.push(data[dcount][0]);
//                 coolTime = i+data[dcount][2];
//                 dcount++;
//             } else {
//                 if(queue.length===0) continue;
//                 let min = Infinity;
//                 for(let k=0; k<queue.length; k++) {
//                     const cur = queue[k];
//                     if(cur[2] < min) {
//                         min = cur[2];
//                         doc = cur;
//                         temp = k;
//                         console.log("doc", doc)
//                     }
//                 }
//                 queue.splice(temp, 1);
//                 answer.push(doc[0]);
//                 coolTime = i + doc[2];
//             }
//         } else {
//             if(data[dcount][1]===i) {
//                 queue.push(data[dcount]);
//                 dcount++;
//             }
//         }
//         console.log("answer", answer)
//         console.log("queue", queue)
//         if(answer.length >= data.length) return answer;
//     }
//     return answer;
// }

// let a = solution([[1,0,5], [2,2,2], [3,3,1], [4,4,1], [5,10,2]])
// let a = solution([[1,0,3], [2,1,3], [3,3,2], [4,9,1], [5,10,2]])
let a = solution([[1,2,10], [2,5,8], [3,6,9], [4,20,6], [5,25,5]])
console.log(a)
// console.log(a,b,c)

// function solution(data) {
//     const queue = [];
//     const answer = [];
//     const leng = data.length;
//     const lastTime = 2 * (data[leng-1][1] + data[leng-1][2]);
//     let coolTime = -1;
//     let dcount = 0;
//     let doc;
//     let idx;

//     for(let i=0; i<lastTime; i++) {
//         if(dcount < leng && data[dcount][1] === i && data[dcount][1] != coolTime) { //큐에 넣음
//             queue.push(data[dcount]);
//             dcount++;
//         }
//         if(coolTime <= i) { //인쇄중 x
//             if(dcount < leng && data[dcount][1]===coolTime) { //data에서 바로 넣는 애
//                 answer.push(data[dcount][0]);
//                 coolTime = data[dcount][2] + i;
//                 dcount++;
//             } else {
//                 if(queue.length===0) continue;
//                 let min = Infinity;
//                 for(let k=0; k<queue.length; k++) { //큐 중 하나 선택
//                     const cur = queue[k];
//                     if(cur[2] < min) {
//                         min = cur[2];
//                         doc = cur;
//                         idx = k;
//                     }
//                 }
//                 answer.push(queue[idx][0]);
//                 coolTime = queue[idx][2] + i;
//                 queue.splice(idx, 1);
//             }
//         }
//         if(answer.length === leng) return answer;
//     }
//     return answer;
// }

function solution(data) {
    let currentTime = 0;
    let printQueue = [];
    let printing = null;
    let result = [];

    while (data.length > 0 || printQueue.length > 0 || printing !== null) {
        // 현재 시간에 인쇄 요청된 문서 추가
        while (data.length > 0 && data[0][1] <= currentTime) {
            printQueue.push(data.shift());
        }

        // 현재 인쇄 중인 문서가 없으면 대기열에서 다음 문서 선택
        if (printing === null && printQueue.length > 0) {
            printQueue.sort((a, b) => {
                if (a[2] !== b[2]) {
                    return a[2] - b[2];
                } else {
                    return a[1] - b[1];
                }
            });

            const nextDocument = printQueue.shift();
            printing = {
                document: nextDocument,
                endTime: currentTime + nextDocument[2],
            };
        }

        // 인쇄 중인 문서가 끝난 경우 결과에 추가하고 인쇄 중 상태 초기화
        if (printing !== null && printing.endTime === currentTime) {
            result.push(printing.document[0]);
            printing = null;
        }

        currentTime++;
    }

    return result;
}

console.log(solution([[1, 0, 5], [2, 2, 2], [3, 3, 1], [4, 4, 1], [5, 10, 2]])); // 출력 결과: [1, 3, 4, 2, 5]
