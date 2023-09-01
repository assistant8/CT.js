const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [NM, ...originArray] = fs.readFileSync(filePath).toString().trim().split("\n")
let [N, M] = NM.split(" ").map(Number);
originArray = originArray.map(e=>e.split("\n"))
let count = 0;
let white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW']
let black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB']

function check(j,h) {
    let whiteDiff = 0;
    let blackDiff = 0;
    for(let i=j; i<8+j; i++) {
        for(let k=h; k<8+h; k++) {
            // console.log(originArray[i][0][k],white[i-j][k-h])
            if(originArray[i][0][k]!==white[i-j][k-h]) whiteDiff++;
            if(originArray[i][0][k]!==black[i-j][k-h]) blackDiff++;
        }
    }
    return whiteDiff>blackDiff ? blackDiff : whiteDiff
}

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