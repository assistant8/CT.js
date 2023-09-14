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

for(let i=0; i<testN; i++) { //각 테스트 케이스마다 반복문 진행 및 결과 리턴 
    let result = 0;
    const W = indexArr[i][0];
    const H = indexArr[i][1];
    result = result + OneTest(W, H, originArr[i]);
    console.log(result);
}

function OneTest(w,h,origin) { //하나의 테스트 케이스에 대한 정답 리턴해야 
    const array = Array.from(Array(w), ()=>Array(h).fill(0)); //0 초기화
    for(let i=0; i<origin.length; i++) { //그래프(배열) 만들기 
        const [a, b] = origin[i];
        array[a][b] = 1;
    }
    // console.log("origin", origin)
    // console.log("array", array)

    let count = 0;
    for(let i=0; i<w; i++) {
        for(let k=0; k<h; k++) {
            if(array[i][k]===1) {
                //만든 array 전체를 for문 돌려서 1일 때만 bfs 돌림
                //무조건 하나의 그룹을 이루는 (그래서 count++) 이유는 이미 방문한 애들은 2로 업뎃 되어서 고려 안해도됨 
                BFS(i, k); 
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


//오래걸렸는데 실수했던 부분
//originArr로 array를 만들었는데 그걸 활용 안함
//위 방법으로 하려면 (visit 대신 1->2로 구별) 그래프가 전역 변수여야
//bfs 함수 내에서 증분을 XY로 표현 해 더 간단하게 표현 
//단지번호는 그래프를 제공 했는데 여기선 배추의 위치만 알려줬기 때문에 내가 따로 그래프(배열)을 만들고 그 그래프를 탐색해야 함
//첫 부분에 기존 배열에 [] 자체를 푸시해서 원소 2인 경우엔 그 안에 원소를 푸시하는 매커니즘
