const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let N = fs.readFileSync(filePath).toString().trim();
N = Number(N)

//같은 행, 같은 열, 같은 대각선에 놓지 않기
//

//초기화 해줘야 
let array = Array.from(Array(N), ()=>Array(N).fill(0));

outer: for(let i=0; i<N; i++) { //i행에
    inner: for(let k=0; k<N; k++) { //i행의 k열
        if(isValid(i, k)) array[i][k]++;
    }
}

function isValid(w, h) {
    for(let j=0; j<N; j++) {
        if(array[w][j]!==0) return false;
        if(array[j][h]!==0) return false; 
    }
    
    
}