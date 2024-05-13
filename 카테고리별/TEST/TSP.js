function tspDynamicProgramming(n, distances) {
    const dp = []; // 부분 문제의 최소 거리를 저장할 배열
    const VISITED_ALL = (1 << n) - 1; // 모든 노드를 방문한 상태

    // dp[mask][i]: 현재 mask 상태에서 마지막 방문한 노드가 i일 때의 최소 거리
    function dfs(mask, current) {
        // 모든 노드를 방문한 경우, 시작 노드(0번 노드)로 돌아가는 거리 반환
        if (mask === VISITED_ALL) {
            return distances[current][0];
        }

        // 이미 계산된 결과가 있는 경우 반환
        if (dp[mask] && dp[mask][current] !== undefined) {
            return dp[mask][current];
        }

        let minDistance = Infinity;

        // 다음 방문할 노드 결정
        for (let next = 0; next < n; next++) {
            if (!(mask & (1 << next))) { // 다음 방문할 노드가 방문하지 않은 경우
                const newMask = mask | (1 << next); // 다음 노드를 방문한 상태로 업데이트
                const currentDistance = distances[current][next] + dfs(newMask, next);
                minDistance = Math.min(minDistance, currentDistance);
            }
        }

        // 메모이제이션
        if (!dp[mask]) {
            dp[mask] = [];
        }
        dp[mask][current] = minDistance;
        return minDistance;
    }

    // 시작 노드(0번 노드)에서 출발하여 최소 거리 탐색
    return dfs(1, 0); // mask=1: 시작 노드(0번 노드)를 방문한 상태
}

// 예시 배열
const distances = [
    [0, 7, 8],
    [4, 0, 6],
    [5, 3, 0]
];

const n = distances.length; // 노드의 수
const minDistance = tspDynamicProgramming(n, distances);
console.log("최소 거리:", minDistance);
