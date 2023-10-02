const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [MN, ...array] = fs.readFileSync(filePath).toString().trim().split("\n")
array = array.map(e=>e.split(" ").map(Number))
const [M,N] = MN.split(" ").map(Number);

main();

function main() {
  const stack = [];
  for(let i=0; i<M; i++) {
    for(let k=0; k<N; k++) {
      if(array[i][k]===2) stack.push([i,k])
    }
  }
  console.log(stack)
  BFS(stack)
  console.log(array)

  // let count = 0;
  // for(let i=0; i<M; i++) { //최종 0 갯수 리턴 
  //   for(let k=0; k<N; k++) {
  //     if(array[i][k]===0) count++;
  //   }
  // }

  // return count;
}


function BFS(virus) {
  const needVisit = virus;
  const x = [1, -1, 0, 0];
  const y = [0, 0, 1, -1];
  
  while(needVisit.length!==0) {
    console.log("needVisit", needVisit)
    const [p, q] = needVisit.shift();
    array[p][q]++; //방문 
    for(let i=0; i<4; i++) {
      const X = p+x[i];
      const Y = q+y[i];
      if(X>-1 && Y>-1 && X<M && Y<N) {
        if(array[X][Y]===0) { //방문 안했으면 푸시
          needVisit.push([X,Y]);
        }
      }
    }
  }
}






//2 근처에서 부터 벽을 세우고 각 경우마다 bfs 해서 감염시킴
  //2 근처는 3개의 조합을 만들어서 돌림 
//그리고 쭉 봐서 0이 몇개인지 카운트 

//아래 (needvisit에 넣을때)에서 방문 체크해야 처음 발생원에서 시작할 수 있고 더 효율적으로 루프 돌게됨 