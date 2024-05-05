function solution(dirs) {
  var answer = 0;
  const visited = [];
  let cur = [5, 5];
  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  for (let i = 0; i < dirs.length; i++) {
    const before = cur.slice();
    const dir = dirs[i];
    const [dx, dy] = move[dir];
    const [movedX, movedY] = [before[0] + dx, before[1] + dy];
    if (movedX < 0 || movedX > 10 || movedY < 0 || movedY > 10) continue;
    // 올바른 경로임
    cur = [movedX, movedY]; // 현재 위치 업뎃

    // 첫걸음
    if(i===0) visited.push([[0,0],cur]);

    // 방문하지 않은 경로면 visited에 push, count
    for (let k = 0; k < visited.length; k++) {
      const [[a, b], [c, d]] = visited[k];
      if (
        (before[0] === a && before[1] === b && movedX === c && movedY === d) ||
        (before[0] === c && before[1] === d && movedX === a && movedY === b)
      ) break;
      if(k===visited.length-1) {
        visited.push([before, cur]);
        answer++;
      }
    }

  }
  return answer;
}

console.log(solution("LULLLLLLU"));
console.log(solution("ULURRDLLU"));
//7


//visited push 형식으로, 대신 [도착][출발]은 꺼내고 체크하기로
//[5,5] 시작
//좌표 벗어난 경우 (음수) 그거 처리 x

//현재 dir대로 cur 업뎃
    //벗어나면 업뎃 x   
//방금 경로 visited 배열에서 찾기
    //없으면 count++
    //visited 처리
