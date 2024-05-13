function canAchieveMaxMedian(nums, k, mid) {
    let operationsNeeded = 0;
    for (let num of nums) {
        if (num < mid) {
            // num을 mid 이상으로 만드는 연산 횟수 계산
            let needed = Math.ceil((mid - num) / num);
            operationsNeeded += needed;
            if (operationsNeeded > k) {
                return false; // k보다 연산 횟수가 많아지면 실패
            }
        }
    }
    return operationsNeeded <= k;
}

function maximizeMedian(nums, k) {
    let left = 1; // 배열의 최소값
    let right = Math.pow(10, 9); // 배열의 최대값 (문제에 따라 적절히 설정)

    while (left < right) {
        let mid = Math.floor((left + right + 1) / 2);

        if (canAchieveMaxMedian(nums, k, mid)) {
            left = mid; // 중간값을 높일 수 있는 경우
        } else {
            right = mid - 1; // 중간값을 높일 수 없는 경우
        }
    }

    return left; // 최대화된 중앙값 반환
}

// 예시 배열과 k 값
const nums = [1, 2, 3, 4, 5];
const k = 2;

// 중앙값 최대화 함수 호출
const maxMedian = maximizeMedian(nums, k);
console.log("최대 중앙값:", nums[maxMedian]);
