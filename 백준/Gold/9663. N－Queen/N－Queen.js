const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let N = fs.readFileSync(filePath).toString().trim();
N = Number(N)

let answer = 0;
for(let i=0; i<N; i++) { //i가 첫번째 줄에 몇 열에 놓을 것인가를 뜻함
    let board = new Array(N).fill(0);
    board[0] = i; //[i,0,0,0] 4번 반복 (첫 행에는 초기값을 줘야 vaild 검증이 되니까 이러는 듯)
    DFS(board, 0);
    // console.log()
}
console.log(answer)


function DFS(board, row) {
    if(row === N-1) answer++; //재귀로 넘어왔을 때 마지막 줄이면 케이스 카운트
    else {
        for(let i=0; i<N; i++) {
            board[row+1] = i;
            // console.log(board)

            if(isvalid(board, row+1)) { //합당하면 다음 줄로 재귀로 넘어감
                // console.log("!!")
                DFS(board, row+1);
            }
        }
    }
}

function isvalid(board, row) {
    for(let i=0; i<row; i++) {
        if(board[i]===board[row]) return false;
        if(Math.abs(board[i]-board[row]) === Math.abs(i-row)) return false;
    }
    return true;
}





//같은 행, 같은 열, 같은 대각선에 놓지 않기

//1차원으로 한 이유 - 시간 초과 , index가 행이 된다면 ㄱㅊ, 배열 값이 같지만 않으면 열 문제는 해결 
//대각선 체크 = 직선의 기울기의 절댓값 = y좌표 차이 / x좌표 차이

