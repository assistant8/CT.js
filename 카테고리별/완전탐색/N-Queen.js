// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let N = fs.readFileSync(filePath).toString().trim();
// N = Number(N)

// //같은 행, 같은 열, 같은 대각선에 놓지 않기

// let array = 
// for(let i=0; i<N; i++) { //i행에
//     for(let k=0; k<N; k++) { //i행의 k열

//     }
// }

function solution(n) {
    let answer = 0;
    
    const dfs = (board, row) => {
      if(row === n) answer++;
      else {
        for(let i = 1; i <= n; i++) {
          board[row+1] = i;
          if(isValid(board, row+1)) dfs(board, row+1);
        }
      }
    }
    
    const isValid = (board, row) => {
      for(let i = 1; i < row; i++) {
        if(board[i] === board[row]) return false;
        if(Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false;
      }
      return true;
    }
    
    for(let i = 1; i <= n; i++) {
      const board = new Array(n+1).fill(0);
      board[1] = i;
      dfs(board, 1);
    }
    
    return answer;
  }