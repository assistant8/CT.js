const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NM, ...A] = fs.readFileSync(filePath).toString().trim().split("\n")
let [N,M] = NM.split(" ").map(Number);
A = A.map(e=>e.split(" ").map(Number))[0]

const getCombinations = (array, selectNumber) => {
    const results = [];
    if(selectNumber === 1){
        return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}

const result = getCombinations(A, 3)
result.forEach((e,idx)=>{
    let sum = 0;
    for(let i=0; i<3; i++) {
        sum += e[i];
        result[idx]=sum;
    }
})

result.sort((a,b)=>b-a);
for (const e of result) {
    if (e <= M) {
        console.log(e);
        break; // 루프 종료
    }
}



