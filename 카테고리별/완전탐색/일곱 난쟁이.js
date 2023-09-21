const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const nines = fs.readFileSync(filePath).toString().trim().split("\n").map(Number)

// console.log(nines)
const resultArray = getCombination(nines, 7);
for(const arr of resultArray) {
    if(arr.reduce((sum, cur) => sum+cur, 0) === 100) {
        arr.sort((a,b)=>a-b);
        arr.forEach(e=>console.log(e));
        break;
    }
}

function getCombination(array, selectNumber) {
    const result = [];
    if(selectNumber===1) {
        return array.map(e=>[e])
    }

    array.forEach((element, index, origin)=>{
        const rest = origin.slice(index+1);
        const combinations = getCombination(rest, selectNumber - 1);
        const attached = combinations.map(combination=>[element, ...combination]);
        result.push(...attached);
    })

    return result;
}

//9c7을 이용해서 풀었지만, 
//이정도는 2개를 제외한 배열의 합이 100인걸 이용해서 for문 2개로 구현 가능
