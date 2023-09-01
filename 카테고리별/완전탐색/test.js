const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NM, ...A] = fs.readFileSync(filePath).toString().trim().split("\n")
let [N,M] = NM.split(" ").map(Number);
A = A.map(e=>e.split(" ").map(Number))[0]

// const getCombinations = (array, selectNumber) => {
//     const results = [];
//     if(selectNumber === 1){
//         console.log(array)
//         return array.map((element) => [element]);
//     }
//     array.forEach((fixed, index, origin) => {
//         const rest = origin.slice(index+1);
//         const combinations = getCombinations(rest, selectNumber - 1);
//         const attached = combinations.map((combination) => [fixed, ...combination]);
//         results.push(...attached);
//     });

//     return results;
// }

// const result = getCombinations(A, 3)
// console.log(result)

////
const getCombinations = (array, selectNumber) => {
    let result = [];
    if(selectNumber === 1) {
        return array.map(element=>[element]);
    }
    
    array.forEach((fixed, index, origin)=>{
        const rest = origin.slice(index+1);
        const combination = getCombinations(rest, selectNumber-1);
        const attached = combination.map(combination=>[fixed, ...combination]);
        result.push(...attached);
    })

    return result;
}

