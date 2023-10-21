const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function getPermutation(array, selectNumber) {
    const result = [];
    if(selectNumber===1) {
        return array.map(element=>[element]);
    }

    array.forEach((fixed, index, origin)=>{
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
        const permutations = getPermutation(rest, selectNumber-1);
        const attached = permutations.map(permutation=>[fixed, ...permutation]);
        result.push(...attached);
    })

    return result;
}

function main() {
    const array = Array.from(Array(N), (e, i)=>i+1)
    const result = getPermutation(array, M)
    result.forEach(e=>{
        console.log(e.join(" "))
    })
}

main();
