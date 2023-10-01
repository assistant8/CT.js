const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let N = fs.readFileSync(filePath).toString().trim();
N = Number(N)

let answer = 0;
for(let i=0; i<N; i++) { //i가 첫번째 줄에 몇 열에 놓을 것인가를 뜻함
    let board = new Array(N).fill(0);
    board[0] = i; //[i,0,0,0] 4번 반복 (첫 행에는 초기값을 줘야 vaild 검증이 되니까 이러는 듯)
    DFS(board, 0);
    console.log()
}
console.log(answer)


function DFS(board, row) { //재귀로 넘어가기 전 한 dfs는 한 줄을 담당 
    if(row === N-1) answer++; //재귀로 넘어왔을 때 마지막 줄이면 케이스 카운트
    else {
        for(let i=0; i<N; i++) { //각 줄에서 어떤 열을 선택할 지
            board[row+1] = i;
            console.log(board)

            if(isvalid(board, row+1)) { //합당하면 다음 줄로 재귀로 넘어감
                console.log("!!")
                DFS(board, row+1);
            }
        }
    }
}

function isvalid(board, row) { //현재의 줄까지만 검증하네 ㅇㅈ 
    for(let i=0; i<row; i++) {
        if(board[i]===board[row]) return false; //각 원소에 같은 수 있나
        if(Math.abs(board[i]-board[row]) === Math.abs(i-row)) return false; 
        //대각선 = 인덱스와 원소값의 차이가 동일한지 = 행과 열로 기울기 구함
    }
    return true;
}





//같은 행, 같은 열, 같은 대각선에 놓지 않기

//1차원으로 한 이유 - 시간 초과 , index가 행이 된다면 ㄱㅊ, 배열 값이 같지만 않으면 열 문제는 해결 
//(행 문제는 당연히 한 index 안에 여러 값이 안들어가면 각 행에 하나의 원소만 들어가겠지)

//대각선 체크 = 직선의 기울기의 절댓값 = y좌표 차이 / x좌표 차이

//백트래킹, DFS 관련 
//그 줄에서 vaild 해야 다음 줄로 넘어가기 때문에 valid 안한 모든 경우의 수를 탐색 안한다는 점에서 효율적 
//valid 하자마자 다음 줄로 넘어감 (재귀) - for문 다 돌았는데 다음 재귀 안넘어가면 그 DFS 탈출하고 다음 넘어가버리지 - 그 경우 배제 
//탭 메모 확인 - 이해하기 

//https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EC%A7%91%ED%95%A9-JS-2xs6gra3
//https://chanhuiseok.github.io/posts/baek-1/