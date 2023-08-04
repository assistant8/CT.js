function solution(n, results) {
    // 그래프 초기화
    const graph = Array.from({ length: n }, () => Array(n).fill(false));
    console.log("1", graph)
  
    // 간선 추가
    for (let [winner, loser] of results) {
      graph[winner - 1][loser - 1] = true;
    }
    console.log("2", graph)
  
    // 각 선수에 대해 DFS를 통해 도달 가능한 노드 수 계산
    const counts = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      const visited = Array(n).fill(false);
      dfs(i, i, visited);
    }
  
    // DFS 함수 정의
    function dfs(start, current, visited) {
      visited[current] = true;
  
      for (let i = 0; i < n; i++) {
        if (graph[current][i] && !visited[i]) {
          counts[start]++;
          dfs(start, i, visited);
        }
      }
    }
  
    // 도달 가능한 노드의 수가 n-1인 경우 순위가 확정됨
    let answer = 0;
    for (let count of counts) {
      if (count === n - 1) {
        answer++;
      }
    }
  
    return answer;
  }

const n = 5;
const results = [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]];
console.log(solution(n, results)); // 출력: 2