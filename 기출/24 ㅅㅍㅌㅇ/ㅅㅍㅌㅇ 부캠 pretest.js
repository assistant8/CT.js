let array = [
  [0, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 1, 0],
  [1, 1, 1, 0, 0, 0],
];

const num = 6;
const answer = [];

for (let i = 0; i < num; i++) {
  for (let k = 0; k < num; k++) {
    if (array[i][k] === 1) bfs(i, k);
  }
}

console.log(array)
console.log(answer)

function bfs(initialx, initialy) {
    let count = 0;
  const needVisit = [[initialx, initialy]];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (needVisit.length) {
    const [x,y] = needVisit.shift();
    for (let i = 0; i < 4; i++) {
      const X = x + dx[i];
      const Y = y + dy[i];
      if (X >= 0 && X < num && Y >= 0 && Y < num && array[X][Y] === 1) {
        array[X][Y]++;
        count++;
        needVisit.push([X, Y]);
      }
    }
  }
  answer.push(count)
}

// 3
// 4 5 7
