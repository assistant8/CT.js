const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...array] = fs.readFileSync(filePath).toString().trim().split("\n")
array = array.map(e=>e.split(" ").map(Number))

// console.log(array)

function main() {
    const indexArr = createArray();
    const combi = getCombination(indexArr, N/2);
    // console.log("combi", combi);
    let least = 10000;
    for(let i=0; i<combi.length; i++) {
        const combi2 = getRestCombi(combi[i]);
        const combi1 = combi[i];
        // console.log("restCombi", combi1, combi2)
        const redArr = getCombination(combi1, 2);
        const blueArr = getCombination(combi2, 2);
        
        // console.log("blueArr", redArr, blueArr)
        let redSum = 0; 
        let blueSum = 0;
        for(let k=0; k<redArr.length; k++) {
            const [a,b] = redArr[k];
            const [c,d] = blueArr[k];
            redSum += array[a][b];
            redSum += array[b][a];
            blueSum += array[c][d];
            blueSum += array[d][c];
        }
        // console.log("redSum, blueSum", redSum, blueSum)
        if(least > Math.abs(redSum-blueSum)) least = Math.abs(redSum-blueSum)
    }
    return least;

}
console.log(main())

function getRestCombi(originCombi) {
    let result = []; 
    for(let i=0; i<N; i++) {
        if(!originCombi.includes(i)) result.push(i);
    }
    return result;
}

function createArray() {
    let result = []; 
    for(let i=0; i<N; i++) {
        result.push(i);
    }
    return result;
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
