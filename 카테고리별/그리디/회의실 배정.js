const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");
N = Number(N);
rest = rest.map(e=>{
    return e.split(" ").map(Number)
})

rest.sort(function(a,b) { //배열 정렬 
    if(a[0]===b[0]) {
        return a[1]-b[1]
    } else {
        return a[0]-b[0]
    }
})

// console.log(rest)

let count = 1;
let currentBack = rest[0][1]; //초기값 설정은 필수 - 그래야 나머지거를 비교가능

if(N===1) { //1인 특수한 상황은 따로 처리해놓기 
    console.log(1)
    return;
}

//첫번째꺼로 시작해 선택한거 기준삼아 비교 
for(let i=1; i<rest.length; i++){
    if(currentBack>rest[i][1]) { //뒤보다 작은게 있으면 취소, 그거 선택
        currentBack = rest[i][1]
    } 
    else if(currentBack<=rest[i][0]) { //뒤보다 앞이 작으면 넘기고 같아질때부터 그거 선택 
        count++;
        currentBack = rest[i][1]
    }
}

console.log(count)