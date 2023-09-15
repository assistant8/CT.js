const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [testN, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n")
testN=Number(testN);
rest = rest.map(e=>e.split(" ").map(Number))

let testCount = 0;
let indexArr = []; //원소 3개인 배열 
let originArr = []; //각 테스트케이스마다의 배열 
for(let i=0; i<rest.length; i++) { //테케마다 배열 분리 
    if(rest[i].length===3) {
        indexArr.push(rest[i]);
        originArr.push([]);
        testCount++;
    }
    else originArr[testCount-1].push(rest[i])
}

// console.log(indexArr)
// console.log(originArr)

for(let i=0; i<testN; i++) {
    let result = 0;
    const W = indexArr[i][0];
    const H = indexArr[i][1];
    result = result + OneTest(W, H, originArr[i]);
    console.log(result);
    // const hi = OneTest(W, H, originArr[i])
    // console.log("!!", i, hi)
}

function OneTest(w,h,origin) { //하나의 테스트 케이스에 대한 정답 리턴해야 
    const array = Array.from(Array(w), ()=>Array(h).fill(0)); //0 초기화
    for(let i=0; i<origin.length; i++) { //그래프 만들기 
        const [a, b] = origin[i];
        array[a][b] = 1;
    }
    // console.log("origin", origin)
    // console.log("array", array)

    let count = 0;
    for(let i=0; i<w; i++) {
        for(let k=0; k<h; k++) {
            if(array[i][k]===1) {
                BFS(i, k) 
                count++;
            }
        }
    }

    return count;

    function BFS(ii, kk) { //벌레 하나가 커버할 그 부분 구역마다 
        const needVisit = [[ii,kk]];
        const x = [0, 0, 1, -1];
        const y = [1, -1, 0, 0];
        
        while(needVisit.length!==0) {
            const [p,q] = needVisit.shift();
            if(array[p][q]===1) { //방문 안한 1이면
                array[p][q]++;
                for(let j=0; j<4; j++) {
                    const X = p+x[j];
                    const Y = q+y[j];
                    if(X>-1 && X<w && Y>-1 && Y<h) {
                        if(array[X][Y] === 1) needVisit.push([X,Y])                        
                    }
                }
            }
        }
    }
}


