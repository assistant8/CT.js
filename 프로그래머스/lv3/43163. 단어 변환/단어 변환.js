function solution(begin, target, words) {
  // 탐색을 시작하는 노드를 큐에 넣고, 방문 처리를 합니다.
  const queue = [[begin, 0]];
  const visited = new Set([begin]);

  while (queue.length) {
    // 큐에서 탐색할 노드와 거리를 꺼냅니다.
    const [current, distance] = queue.shift();

    // target에 도달했으면 거리를 반환합니다.
    if (current === target) {
      return distance;
    }

    // 모든 단어를 하나씩 확인합니다.
    for (const word of words) {
      // 한 글자씩 다른 단어인 경우, 방문하지 않은 단어이면 큐에 넣고 방문 처리합니다.
      if (diffOneChar(current, word) && !visited.has(word)) {
        queue.push([word, distance + 1]);
        visited.add(word);
      }
    }
  }

  // target으로 변환할 수 없는 경우 0을 반환합니다.
  return 0;
}

// 한 글자씩 다른 단어인지 확인하는 함수입니다.
function diffOneChar(word1, word2) {
  let diffCount = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diffCount++;
    }
    if (diffCount > 1) {
      return false;
    }
  }
  return diffCount === 1;
}
