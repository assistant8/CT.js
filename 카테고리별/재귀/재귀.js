function getMaxSum(arr, currentIndex = 0, currentCombination = []) {
    if (currentCombination.length === 4) {
        // 현재 조합의 길이가 4일 때 합을 계산하고 반환
        return currentCombination.reduce((acc, val) => acc + val, 0);
    }

    // 베이스 케이스: 배열 끝까지 도달하면 0 반환
    if (currentIndex === arr.length) {
        return 0;
    }

    // 현재 인덱스의 첫 번째 원소를 선택하고 다음 인덱스로 이동
    const sumWithFirstElement = getMaxSum(arr, currentIndex + 1, [...currentCombination, arr[currentIndex][0]]);
    // 현재 인덱스의 두 번째 원소를 선택하고 다음 인덱스로 이동
    const sumWithSecondElement = getMaxSum(arr, currentIndex + 1, [...currentCombination, arr[currentIndex][1]]);

    // 각 경우의 합 중 최대값 반환
    return Math.max(sumWithFirstElement, sumWithSecondElement);
}

let max = -1;
const inputArray = [[4,1],[0,1],[4,3],[0,1]];
const maxSum = getMaxSum(inputArray);

// console.log(maxSum);  // 최대값 출력

// O(2^n) n^2보다 최악 


// nPm 
function getPermutation(n,m) {
    const seq = Array(m).fill(0);
    const visited = Array(n+1).fill(0);
    let result = [];

    function dfs(k) {
        if(k===m) {
            return result.push([...seq]);
        }

        for(let i=1; i<=n; i++) {
            if(!visited[i]) {
                seq[k] = i;
                visited[i] = true;
                dfs(k+1);
                visited[i] = 0;
            }
        }
    }
    dfs(0);
    return result;
}

// console.log(getPermutation(4,3))


// 2^n 경우의 수
// visited의 유무 차이임 - 중복순열임!
function getPermutation2(n) {
    const seq = Array(n).fill(0);
    const result = [];

    function dfs(k) {
        if (k === n) {
            result.push([...seq]);
            return;
        }

        for (let bit of [0, 1]) {
            seq[k] = bit;
            dfs(k + 1);
        }
    }

    dfs(0);
    return result;
}

const permutations = getPermutation2(4);

console.log(permutations);