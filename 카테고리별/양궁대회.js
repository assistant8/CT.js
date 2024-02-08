function solution(n, info) {
    // 각 스테이지마다 맞출 수 있는 화살의 개수
    const array = [];
    for(let i=0; i<=10; i++) {
        const a = info[i];
        const arr = [0,0];
        if(a===0) arr[0] = 1;
        else { arr[1] = 0; arr[0] = a+1; }
        array.push(arr);
    }

    // 2^10 경우의 수 구함 - 각 스테이지 마다 idx 0 or 1
    const seq = Array(11).fill(0);
    const result = [];
    function dfs(k) { //2 4
        if(k===10) {
            result.push([...seq])
            return;
        }

        for(let i=0; i<2; i++) {
            seq[k] = array[k][i];
            dfs(k+1);
        }
    }
    dfs(0);

    // 반복문으로 돌면서 각 경우의 수 탐색
    let max = -1;
    let maxArr = [-1];
    for(let i=0; i<result.length; i++) {
        const onecase = result[i]; //하나의 케이스
        let arrowsum = 0; //n 이하여야 함
        let sumScore1 = 0; //이 둘의 차이값 중 최대 구하기 
        let sumScore2 = 0;
        let tempArr = [];
        for(let stage=10; stage>=0; stage--) { 
            let arrow = onecase[10-stage];
            if(stage===0) {
                arrow = n-arrowsum; //남은거에 다쓰기
            }
            else if(arrowsum + arrow > n) arrow = 0; //넘치면 나머지 케이스인 0개
            tempArr.push(arrow);
            arrowsum += arrow;

            if(arrow===0 && info[10-stage]===0); //sumscore 양쪽 계산
            else if(arrow > info[10-stage]) sumScore1+=stage;
            else if(arrow <= info[10-stage]) sumScore2+=stage;
        }
        
        // 차이가 최대인 케이스, 그 중 가장 작은 값을 많이 맞춘 케이스 리턴
        // 최대면 바로 반영, 같으면 그때야 가장 작은 값 있는지 판단해야 (한꺼번에 if(max <= diff) 불가능)
        const diff = sumScore1-sumScore2;
        if(max < diff) {
            max = diff;
            maxArr = tempArr.slice();
        } else if(max === diff) {
            for(let j=10; j>=0; j--) {
                if(tempArr[j]<maxArr[j]) break;
                else if(tempArr[j]>maxArr[j]) {
                    max = diff;
                    maxArr = tempArr.slice();
                    break;
                }
            }
        }
    }
    return (max<=0) ? [-1] : maxArr
}

console.log(solution(5, [2,1,1,1,0,0,0,0,0,0,0]	));
console.log(solution(1, [1,0,0,0,0,0,0,0,0,0,0]	));
console.log(solution(9, [0,0,1,2,0,1,1,1,1,1,1]	));
console.log(solution(10, [0,0,0,0,0,0,0,0,3,4,3]));
// 8점과녁 a<=b면 어피치 8점, a=b=0이면 둘다 0점
// 모든 과녁에서 절대 같으면 안됨
// 지면 무조건 0개, 이기면 어피치+1개로 이겨야 함 => 각 경우의 수는 2
    //상대 0이면 0 or 1

// 일단 10 배열에 각 과녁마다 [a,b] 추가해서 생성 
// 재귀해서 각 경우의 수 중 최대 점수를 구함 
// 총합 > n 이면 재귀 종료 
// 최대 갱신 시 이기는 점수인지 판별하는 부분 추가 



// 재귀 시도했지만 재귀에 대한 명확한 이해 불충분, 포기 
// 따라서 위처럼 모든 경우의 수 구하는 걸 따로 하고 이후 경우의 수를 적용하며 메인 로직 구현

// function getMax(stage, arrowsum, sumScore1, sumScore2, combination=[]) {
//     console.log(combination, arrowsum)
//     if (stage === 0) { // if (stage === 0 || arrowsum >= n)
//         if(max < sumScore1 && sumScore1 > sumScore2) {
//             max = sumScore1;
//             maxArr = combination.slice();
//         }
//         return
//     }
    
//     arrow = array[10-stage][0]; //arr[0] 화살 수 선택
//     if(arrowsum + arrow <= n) arrowsum+=arrow; //총 화살 수 안넘으면 그 화살 수 그대로 적용
//     else arrow = 0;

//     if(arrow==0 && info[10-stage]==0); // 나와 상대 화살 비교해서 점수 먹음
//     else if(arrow > info[10-stage]) sumScore1+=stage;
//     else if(arrow <= info[10-stage]) sumScore2+=stage;
//     getMax(stage-1, arrowsum, sumScore1, sumScore2, [...combination, arrow])

//     arrow = array[10-stage][1];
//     if(arrowsum + arrow <= n) arrowsum+=arrow;
//     else arrow = 0;

//     if(arrow==0 && info[10-stage]==0);
//     else if(arrow > info[10-stage]) sumScore1+=stage;
//     else if(arrow <= info[10-stage]) sumScore2+=stage;
//     getMax(stage-1, arrowsum, sumScore1, sumScore2, [...combination, arrow])
// }

// getMax(10, 0, 0, 0);
// console.log(max, maxArr);

