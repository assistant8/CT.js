const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const nines = fs.readFileSync(filePath).toString().trim().split("\n").map(Number)

const resultArray = getCombination(nines, 7);
for(const arr of resultArray) {
    if(arr.reduce((sum, cur) => sum+cur, 0) === 100) {
        arr.sort((a,b)=>a-b);
        arr.forEach(e=>console.log(e));
        break;
    }
}

function getCombination(array, selectNumber) {
    // console.log("array, selectNumber", array, selectNumber)
    const result = [];
    if(selectNumber===1) {
        return array.map(e=>[e])
    }

    //들어온 array마다 순서대로 fixed (1) -> (2) -> (3)
    //rest는 fixed 이후의 원소들의 배열 
    //rest 배열로 다시 combi 구함 = selectNum이 1이 될때까지 반복 
    //attached = 구한 combi + fixed 붙여 -> result에 푸시 후 리턴 
    array.forEach((fixed, index, origin)=>{ 
        const rest = origin.slice(index+1);
        const combinations = getCombination(rest, selectNumber - 1);
        const attached = combinations.map(combination=>[fixed, ...combination]);
        result.push(...attached);
    })

    return result;
}

//9c7을 이용해서 풀었지만, 
//이정도는 2개를 제외한 배열의 합이 100인걸 이용해서 for문 2개로 구현 가능
