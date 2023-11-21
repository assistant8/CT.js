const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...origin] = fs.readFileSync(filePath).toString().trim().split("\n");
origin = origin.map(e=>e.split(" ").map(Number));
// console.log(origin)
n = Number(n);
let seat = Array.from(Array(n), ()=>Array(n).fill(0));
const people = []; //이미 앉은 애들 모임 
console.log(seat);
main();

function main() {
    for(let i=0; i<origin.length; i++) {
        const row = origin[i];
        const me = row[0];
        selectSeat(me, row);
    }
}

function selectSeat(me, row) {
    const px = [-1, 1, 0, 0];
    const py = [0, 0, -1, 1];
    const copy = seat.map(e=>{return e.map(ee=>{if(ee>0) return String(ee); else return ee})}) //me를 어디에 둘까, seat는 string 화 시켜서 구분짓기 
    // 아래에서 x,y에서 ++ 안되고 가장 큰 값 찾을 떄도 배제
    console.log("!!", copy)
    
    for(let k=1; k<5; k++) { //좋아하는 번호 4개
        const num = row[k];
        console.log(num)
        outer: for(let a=0; a<n; a++) {
            for(let b=0; b<n; b++) {
                if(seat[a][b]===num) { //seat에 num 존재 시, a b가 index 
                    console.log("seat[a][b]", seat[a][b])
                    for(let i=0; i<4; i++) {
                        const x = px[i] + a;
                        const y = px[i] + b;
                        if(typeof(copy[x][y])!=='number') continue;
                        if(x>0 && y>0 && x<n && y<n) {
                            copy[x][y]++;
                        } 
                    }
                }
                // break outer;
            }
        }
    }
    //copy 완성
    console.log("copy", copy)
    let max = -1;
    let maxIdx = [];
    for(let a=0; a<n; a++) {
        for(let b=0; b<n; b++) {
            if(typeof(copy[a][b])==='number' && copy[a][b]>max) {
                max = copy[a][b];
                maxIdx.push([a,b]);
            }
        }
    }
    //maxidx는 구했는데 공동 1등들을 구해야함 그리고 2,3,4 우선순위 고려해서 seat에 할당 
}

function calculateScore() {

}

//학생별 좋아하는 4명, 중복 x

//우선순위
//좋아하는 친구 수 가장 많이 인접한 위치
//인접 칸 중 빈칸 가장 많은 위치 - 벗어난건 고려 x
//행 번호 -> 열 번호 가장 작은 위치 

//전부 배치 후 최종 점수 계산 후 리턴 

//2차원 배열에서 특정 원소의 index를 알고싶었는데.. 
// includes 해서 이중 for문으로 indexof 할 바에 위처럼 하는게 낫다 생각함 

//마지막 실수 - 사방으로 for문 돌릴 때 X>0이 아닌 X>=0