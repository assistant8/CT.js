const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NM, array] = fs.readFileSync(filePath).toString().trim().split("\n").map(e=>e.split(" ").map(Number))
let [N, M] = NM;

const getCombinations = (array, selectNumber) => {
    const results = [];
    if(selectNumber === 1){
        return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1)
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}

function main() {
    let count = 0;
    for(let i=1; i<=N; i++) {
        const eachResult = getCombinations(array, i);
        eachResult.forEach(e=>{
            if(e.reduce((a,b)=>a+b) === M) count++;
        })
    }

    return count;
}

console.log(main())

//메모리 초과 이유 모르겠음