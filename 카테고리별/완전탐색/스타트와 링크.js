const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...array] = fs.readFileSync(filePath).toString().trim().split("\n")
array = array.map(e=>e.split(" ").map(Number))

console.log(array)

function main() {
    
}

function getCombination(array, selectNumber) {
    const results = [];
    if(selectNumber===1) {
        return array.map(element=>[element]);
    }

    array.forEach((fixed, index, origin)=>{
        const rest = origin.slice(index+1);
        const combinations = getCombination(rest, selectNumber-1);
        const attached = combinations.map(combination=>[fixed, ...combination])
        results.push(...attached)
    })
    return results
}

// N 중에 N/2를 구하는 조합을 구해서 
// 나머지 조합과의 각각 합을 구한다
