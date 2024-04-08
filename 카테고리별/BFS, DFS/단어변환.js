// function solution(begin, target, words) {
//     //탐색하려는 단어 Q에 넣고 방문 기록
//     const queue = [[begin, 0]];
//     const visited = new Set([begin]);
  
//     while (queue.length) { //Q가 존재하는 동안
//       const [current, count] = queue.shift(); //Q에서 단어와 count 꺼냄
  
//       if (current === target) { //현재 단어와 타겟 동일 시 count 리턴
//         return count;
//       }
  
//       //모든 words 확인 
//       for (const word of words) {
//         // (한 글자씩 다른 단어 + 방문하지 않은 단어)이면 큐에 넣고 방문 가록
//         if (diffOneChar(current, word) && !visited.has(word)) {
//           queue.push([word, count + 1]);
//           visited.add(word);
//         }
//       }
//     }
  
//     // target으로 변환할 수 없는 경우 0 리턴
//     return 0;
//   }
  
//   // 한 글자씩 다른 단어인지 확인하는 함수
//   function diffOneChar(word1, word2) {
//     let diffCount = 0;
//     for (let i = 0; i < word1.length; i++) {
//       if (word1[i] !== word2[i]) {
//         diffCount++;
//       }
//       if (diffCount > 1) {
//         return false;
//       }
//     }
//     return diffCount === ture;
//   }
  
// 위도 맞는 풀이
// 아래가 최근 풀이

function solution(begin, target, words) {
  const length = words.length;
  const w = begin.length;
  const visited = Array(length).fill(0);
  const needVisit = [];
  for(let i=0; i<length; i++) {
      const word = words[i];
      let count = 0;
      for(k=0; k<w; k++) {
          if(word[k]===begin[k]) count++;
      }
      if(count === w-1) {
          needVisit.push([word, 1]);        
          visited[i] = 1;
      }
  }
  
  while(needVisit.length) {
      const [node, count] = needVisit.shift();
      if(node===target) return count;
      
      for(let i=0; i<length; i++) {
          const word = words[i];
          if(isChangable(word, node) && visited[i]===0) {
              needVisit.push([word, count+1]);
              visited[i] = 1;
          }
      }
  }
  
  return 0;
              
  function isChangable(a, b) {
      let count = 0;
      for(let i=0; i<w; i++) {
          if(a[i]===b[i]) count++;
      }
      if(count === w-1) return true;
      return false;
  }
}

// bfs
// 같은 걸 거치면 최소가 아니니 visited 활용 
// 자신과 char 하나만 다른거 needvisit에 붙임 