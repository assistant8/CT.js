// ?
function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b); // 징검다리 위치를 오름차순으로 정렬
  
    let left = 1; // 거리 최소값
    let right = distance; // 거리 최대값
    let answer = 0;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2); // 거리 중간값
      let prev = 0; // 이전 돌 위치
      let removed = 0; // 제거한 돌 개수
  
      for (let i = 0; i < rocks.length; i++) {
        // mid 거리보다 작은 간격의 돌이 있는 경우
        if (rocks[i] - prev < mid) {
          removed++; // 돌 제거
        } else {
          prev = rocks[i]; // 돌 위치 갱신
        }
      }
  
      // 마지막 돌과 도착지점 사이의 거리 확인
      if (distance - prev < mid) {
        removed++; // 돌 제거
      }
  
      if (removed <= n) {
        // 제거한 돌의 개수가 n 이하인 경우
        left = mid + 1; // 거리 범위를 늘려서 최소값을 업데이트
        answer = Math.max(answer, mid); // 최대 거리 업데이트
      } else {
        right = mid - 1; // 거리 범위를 줄여서 최대값을 업데이트
      }
    }
  
    return answer;
  }
  
  // 만약 입출력 예시처럼 5개의 rocks가 주어지고 그 중에서 2개를 제거해야 하는 경우의 수는 5C2와 같다. 모든 조합을 구해 각각 돌의 거리를 계산하는 것은 당연히 주어진 시간복잡도를 초과할 것 이다.
  
  // 도착지점까지의 거리 distance가 최대 10억이기 때문에 시간복잡도를 고려해야 하는데 O(logN)의 시간복잡도인 이분탐색이 그 접근방법으로 적절해 보인다.
  
  // https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.4-%EC%A7%95%EA%B2%80%EB%8B%A4%EB%A6%AC-JS
  
  