// // 주어진 배열 arr의 모든 부분집합을 생성하는 함수
// function generateSubsets(arr) {
//     const subsets = [[]];
//     for (const elem of arr) {
//         const len = subsets.length;
//         for (let i = 0; i < len; i++) {
//             const subsetCopy = subsets[i].slice(); // 부분집합 복사
//             subsetCopy.push(elem); // 현재 요소 추가
//             subsets.push(subsetCopy); // 새로운 부분집합 추가
//         }
//     }
//     return subsets;
// }

// // 부분집합의 합을 구하는 함수
// function subsetSum(subset) {
//     return subset.reduce((acc, curr) => acc + curr, 0);
// }

// // 주어진 배열 arr에서 부분집합의 평균이 s인 부분집합의 개수를 구하는 함수
// function countSubsetsWithAverageS(arr, s) {
//     const subsets = generateSubsets(arr);
//     let count = 0;
//     for (const subset of subsets) {
//         const sum = subsetSum(subset);
//         const average = sum / subset.length;
//         if (average === s) {
//             console.log(subset)
//             count++;
//         }
//     }
//     return count;
// }

// // 예시 배열과 s 값
// const arr = [2,1,4];
// const s = 3;

// // 결과 출력
// console.log(countSubsetsWithAverageS(arr, s)); // 예시 출력

function solution(A, S) {
    let count = 0;
    for(let i=1; i<=A.length; i++) {
        const target = i*Number(S);
        let left = 0;
        let right = left + i;
        while(right <= A.length) {
            let sum = 0;
            for(let k=left; k<right; k++) {
                sum += A[k];
            }
            console.log(sum, target)
            left++;
            right++;
            if(sum === target) count++;
        }
    }
    console.log(count)
}

const A = [0, 4, 3, -1];
const S = 2;
solution2(A, S)

function solution2(A, S) {
    const n = A.length;
    let count = 0;
    
    // 누적 합 배열 생성
    const prefixSum = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + A[i - 1];
    }

    // 부분 배열의 합과 길이를 계산하여 조건을 만족하는지 확인
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            const sum = prefixSum[j] - prefixSum[i - 1];
            const length = j - i + 1;
            if (sum / length === S) {
                count++;
            }
        }
    }
    
    console.log(count);
}