function getMax(original, idx, combination) {
    console.log(combination, idx)
    if(combination.length === 4) {
        const sum = combination.reduce((acc, val) => acc+val, 0);
        if(max < sum) {
            max = sum;
            maxArr = combination.slice();
        }
        console.log("!!")
        return;
    }

    getMax(original, idx+1, [...combination, original[idx][0]]);
    getMax(original, idx+1, [...combination, original[idx][1]]);
    // 여기는 idx임 (idx+1 아님)
}

let max = -1;
let maxArr = [];
const inputArray = [[4,1],[10,1],[4,3],[0,1]];
getMax(inputArray, 0, []);
console.log(max, maxArr)

// 각 원소 당 하나를 골라 총 4개를 뽑았을 때 최대 값 구하기