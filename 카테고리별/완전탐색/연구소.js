const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [MN, ...array] = fs.readFileSync(filePath).toString().trim().split("\n")
array = array.map(e=>e.split(" ").map(Number))
const [M,N] = MN.split(" ").map(Number);

// // main();

// // function main() {
// //   const stack = [];
// //   for(let i=0; i<M; i++) {
// //     for(let k=0; k<N; k++) {
// //       if(array[i][k]===2) stack.push([i,k])
// //     }
// //   }
// //   console.log(stack)
// //   BFS(stack)
// //   console.log(array)

// //   // let count = 0;
// //   // for(let i=0; i<M; i++) { //최종 0 갯수 리턴 
// //   //   for(let k=0; k<N; k++) {
// //   //     if(array[i][k]===0) count++;
// //   //   }
// //   // }

// //   // return count;
// // }


// // function BFS(virus) {
// //   const needVisit = virus;
// //   const x = [1, -1, 0, 0];
// //   const y = [0, 0, 1, -1];
  
// //   while(needVisit.length!==0) {
// //     console.log("needVisit", needVisit)
// //     const [p, q] = needVisit.shift();
// //     array[p][q]++; //방문 
// //     for(let i=0; i<4; i++) {
// //       const X = p+x[i];
// //       const Y = q+y[i];
// //       if(X>-1 && Y>-1 && X<M && Y<N) {
// //         if(array[X][Y]===0) { //방문 안했으면 푸시
// //           needVisit.push([X,Y]);
// //         }
// //       }
// //     }
// //   }
// // }

// //2 근처에서 부터 벽을 세우고 각 경우마다 bfs 해서 감염시킴
//   //2 근처는 3개의 조합을 만들어서 돌림 
// //그리고 쭉 봐서 0이 몇개인지 카운트 

// //아래 (needvisit에 넣을때)에서 방문 체크해야 처음 발생원에서 시작할 수 있고 더 효율적으로 루프 돌게됨 





let max = 0;
console.log(main())
function main() {
  //2가 있는 곳 배열로 저장 - 그걸 needvisit에 초기값
  const virusLoc = getVirusLoc();

  //1을 3개의 순열을 짜서 array에 배치시켜놓고 각 케이스마다 아래 실행
  function dfs(cnt) {
    if(cnt===3) { //1이 3개가 되면 
      //bfs 돌림 
      let copy = array.map(v=>[...v]); //한 카피본으로 dfs 돌린 후 새 카피본 생성 
      // console.log("copy", copy)
      bfs(virusLoc, copy);  
      // console.log("virus", copy, "\n");

      return
    }
    for(let i=0; i<M; i++) { 
      for(let k=0; k<N; k++) {
        if(array[i][k]===0) {
          array[i][k] = 1;
          dfs(cnt+1);
          array[i][k] = 0;
        }
      }
    }
  }
  dfs(0);
  return max;
}

function bfs(virus, arr) {
  const needVisit = virus.map(v=>[...v]);
  // console.log("needVisit", needVisit)
  const px = [0,0,1,-1];
  const py = [1,-1,0,0];
  
  while(needVisit.length!==0) {
    const [a,b] = needVisit.shift();
    arr[a][b] = 2;
    
    for(let i=0; i<4; i++) {
      const x = a+px[i];
      const y = b+py[i];
      if(x > -1 && x < M && y > -1 && y < N) {
        if(arr[x][y]===0) needVisit.push([x,y])
      }
    }
  }

  const safecount = getSafe(arr);
  // console.log("safecount", safecount)
  if(max < safecount) max = safecount;
}

function getVirusLoc() {
  const virus = [];
  for(let i=0; i<M; i++) {
    for(let k=0; k<N; k++) {
      if(array[i][k]===2) virus.push([i,k])
    }
  }
  return virus;
}

function getSafe(virusdArr) {
  let safe = 0;
  for(let i=0; i<M; i++) {
    for(let k=0; k<N; k++) {
      if(virusdArr[i][k]===0) safe++;
    }
  }
  return safe;
}











// function dfs(cnt) {
//   if(cnt===3) { //1이 3개가 되면 
//     let copy = array.map(v=>[...v]); //한 카피본으로 dfs 돌린 후 새 카피본 생성 
//     console.log(copy)
//     return
//   }
//   for(let i=0; i<M; i++) { 
//     for(let k=0; k<N; k++) {
//       if(array[i][k]===0) {
//         array[i][k] = 1;
//         dfs(cnt+1);
//         array[i][k] = 0;
//       }
//     }
//   }
// }
// dfs(0);
