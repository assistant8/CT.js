const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [MN, ...array] = fs.readFileSync(filePath).toString().trim().split("\n")
array = array.map(e=>e.split(" ").map(Number))
const [N, M] = MN.split(" ").map(Number)

//2의 개수들 중 m개를 뽑는 콤비네이션을 구함
//그 콤비네이션이 깔린 상태에서의 각 1에서의 bfs 해서 최소거리 구하고 그 합을 구함 
//그 합 중 최솟값을 구해 

//굳이라고 생각해서 bfs가 아닌 for문으로 getDistance 해서 최소 거리를 구함 

function main() {
    const allChickenArray = getChickenCoord();
    const chickenCoordCombi = getCombination(allChickenArray, M);
    // console.log("chickenCoordCombi", chickenCoordCombi)
    const allHouseCoord = getHouseCoord();
    // console.log("allHouseCoord", allHouseCoord)

    let leastDistanceInChickenCombi = 99999;
    for(let i=0; i<chickenCoordCombi.length; i++) { //각 치킨 위치 후보들에 대해 진행 
        //bfs 안하고 for문으로 getDistance로 치킨집과 최소값 구하기로함
        let allHouseDistanceSum = 0;
        for(let k=0; k<allHouseCoord.length; k++) { //각 집마다의 계산 
            let least = 99999;
            for(let j=0; j<chickenCoordCombi[i].length; j++) { //해당 후보의 각 치킨집 
                const distance = getDistance(chickenCoordCombi[i][j], allHouseCoord[k]);
                if(distance<least) least = distance;
            }
            allHouseDistanceSum+=least;
        }
        if(leastDistanceInChickenCombi>allHouseDistanceSum) leastDistanceInChickenCombi=allHouseDistanceSum
    }
    console.log(leastDistanceInChickenCombi)
}
main();

function getHouseCoord() {
    const result = [];
    for(let i=0; i<N; i++) {
        for(let k=0; k<N; k++) {
            if(array[i][k]===1) result.push([i,k])
        }
    }
    return result;
}

function getChickenCoord() {
    const result = [];
    for(let i=0; i<N; i++) {
        for(let k=0; k<N; k++) {
            if(array[i][k]===2) result.push([i,k])
        }
    }
    return result;
}

function getDistance(coord1, coord2) {
    return Math.abs(coord1[0]-coord2[0]) + Math.abs(coord1[1]-coord2[1])
}

function getCombination(array, selectNumber) {
    const results = [];
    if(selectNumber===1) {
        return array.map(element=>[element])
    }

    array.forEach((fixed, index, origin)=>{
        const rest = origin.slice(index+1);
        const combinations = getCombination(rest, selectNumber-1);
        const attached = combinations.map(combination=>[fixed, ...combination]);
        results.push(...attached);
    })

    return results;
}

