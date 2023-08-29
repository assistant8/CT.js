//https://jaekwan.tistory.com/110#%--%ED%-A%B-%EC%-D%B-%EC%--%AC%ED%--%AD
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NM, ...originArray] = fs.readFileSync(filePath).toString().trim().split("\n")
let [N, M] = NM.split(" ").map(Number);
originArray = originArray.map(e=>e.split("\n"))
let white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW']
let black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB']

//main에서 넘겨준 8x8의 부분 배열 검사 
//white와 black 두 경우 중 차이가 적은 것을 리턴해줌 
function check(j,h) { 
    let whiteDiff = 0;
    let blackDiff = 0;
    for(let i=j; i<8+j; i++) {
        for(let k=h; k<8+h; k++) {
            if(originArray[i][0][k]!==white[i-j][k-h]) whiteDiff++;
            if(originArray[i][0][k]!==black[i-j][k-h]) blackDiff++;
        }
    }
    return whiteDiff>blackDiff ? blackDiff : whiteDiff
}

//오리지날 큰 배열에서 8x8 부분 배열을 check에 넘기도록 index를 넘김
//모든 루프 돌려서 가장 작은 diff 
function main() {
    let min = 9999;
    for(let j=0; j<=N-8; j++) {
        for(let h=0; h<=M-8; h++) { 
            let diff = check(j,h);
            if(min>=diff) min = diff;
        }
    }
    console.log(min)
}

main();

//원래 야예 main에서 slice로 8x8 부분 배열로 잘라서 배열을 넘기려고 했는데 
//배열을 넘기는 것 까다롭 + 2차원 배열을 slice 하는게 또 함수화 시켜야함 
//오리지날 배열 하나갖다가 index로만 넘나드는게 당연히 부하도 적고 시간도 적고 


// 이거 접근하려면 array[0][0][1] 로 해야 b 접근
// array[0][0]이 'abcd'
// array = [
//     ['abcd'],
//     ['abde']
// ]