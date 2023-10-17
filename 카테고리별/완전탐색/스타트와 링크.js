const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...array] = fs.readFileSync(filePath).toString().trim().split("\n")
array = array.map(e=>e.split(" ").map(Number))

// console.log(array)

function main() {
    const indexArr = createArray(); //[0,1,2,3,4,5]
    const combi = getCombination(indexArr, N/2); //[0,1,2], [0,4,5] ...
    // console.log("combi", combi);
    let least = 10000; //일단 최솟값 세팅 

    for(let i=0; i<combi.length; i++) { //각 콤비의 경우의 수
        const combi1 = combi[i]; //기존 콤비 3개
        const combi2 = getRestCombi(combi[i]); //나머지 3개
        // console.log("restCombi", combi1, combi2)
        const redArr = getCombination(combi1, 2); //콤비1에 대한 원소 2개인 콤비들 (2차원 배열이니 x,y 좌표)
        const blueArr = getCombination(combi2, 2); //콤비2에 대한 원소 2개 콤비들
        
        // console.log("blueArr", redArr, blueArr)
        let redSum = 0; //각 원소 2개 콤비에 대한 합 
        let blueSum = 0;
        for(let k=0; k<redArr.length; k++) { //합을 구하는 과정 
            const [a,b] = redArr[k];
            const [c,d] = blueArr[k];
            redSum += array[a][b];
            redSum += array[b][a];
            blueSum += array[c][d];
            blueSum += array[d][c];
        }
        // console.log("redSum, blueSum", redSum, blueSum)
        // 두 합의 차와 현재 최소값과 비교해 최소값 업뎃 
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

//결국 모든 조합의 경우의 수 구해 진행 