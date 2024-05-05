function solution(card, word) {
  var answer = [];
  const leng = word.length;

  for (let a = 0; a < leng; a++) {
    const node = word[a];
    const count = [0, 0, 0];
    const visited = Array.from(Array(3), () => Array(8).fill(0));
    for (let b = 0; b < node.length; b++) {
      const char = node[b];
      for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 8; k++) {
          const cardChar = card[i][k];
          if (visited[i][k] === 0 && char === cardChar) {
            count[i]++;
            visited[i][k] = 1;
          }
        }
      }
    }
    if(count.includes(0)) continue;
    let sum = 0;
    count.forEach(e => sum+=e);
    if(node.length === sum) answer.push(node);
  }

  return answer.length === 0 ? ["-1"] : answer;
}

solution([], []);

//card에 존재 시 count[i]++, visited[i][k] = 1

// ["ABACDEFG", "NOPQRSTU", "HIJKLKMM"], ["GPQM", "GPMZ", "EFU", "MMNA"]
// ["AABBCCDD", "KKKKJJJJ", "MOMOMOMO"], ["AAAKKKKKMMMMM", "ABCDKJ"]
