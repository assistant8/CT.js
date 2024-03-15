// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let [NM, ...array] = fs.readFileSync(filePath).toString().trim().split("\n");
// let [N, M] = NM.split(" ").map(Number);
// array = array.map(e => e.split(" ").map(Number));
// console.log(array);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const readline = require("readline");
const rl = readline.createInterface({
    input: process.platform === "linux" ? process.stdin : fs.createReadStream(filePath),
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line) // 입력받은 여러줄, line
 }).on("close", function () {
     // 형변환, 구분자(띄어쓰기)기준으로 배열에 삽입
     
     let [N, M] = input.shift().split(" ").map(Number);
     array = input.map(e => e.split(" ").map(Number));

     solution(N, M, array); // 문제 풀이 함수 호출    
     process.exit(); // 프로세스 종료
 });

function solution(N, M, array) {
    let parent = [];
    for(let i=1; i<=N; i++) {
        parent[i] = i;
    }
    
    for(let k=0; k<M; k++) {
        const [option, n1, n2] = array[k];
        if(option === 0) unionParent(parent, n1, n2);
        else if(option === 1) console.log(isUnion(parent, n1, n2));
    }
    
    // 자기 자신이 부모인 n까지 감 = 그 집합의 찐부모
    // 아닌 경우엔 재귀 한번만 가나?
    function getParent(parent, n) {
        if(parent[n] === n) return n;
        parent[n] = getParent(parent, parent[n]);
    
        return parent[n];
    }
    
    function unionParent(parent, a, b) {
        a = getParent(parent, a);
        b = getParent(parent, b);
    
        if(a < b) parent[b] = a;
        else parent[a] = b;
    }
    
    function isUnion(parent, a, b) {
        a = getParent(parent, a);
        b = getParent(parent, b);
    
        if(a===b) return 'YES';
        else return 'NO';
    }
}




// parent n으로 초기화
// getparent
// unionparent
// isunion