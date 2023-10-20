function solution(cap, n, deliveries, pickups) {
    var answer = 0;
  
    while (!(deliveries.every(e => e === 0) && pickups.every(e => e === 0))) {
      let limit1 = cap;
      let limit2 = cap;
      let i = n - 1;
  
      // deliveries와 pickups 배열에서 처리할 작업을 찾기
      while (i >= 0 && deliveries[i] === 0 && pickups[i] === 0) {
        i--;
      }
  
      if (i >= 0) {
        answer += (i + 1) * 2; // 왕복거리
        // 배열 변형
        for (let k = i; k >= 0; k--) {
          if (deliveries[k] > 0) {
            if (limit1 >= deliveries[k]) {
              limit1 -= deliveries[k];
              deliveries[k] = 0;
            } else {
              deliveries[k] -= limit1;
              break;
            }
          }
        }
        for (let k = i; k >= 0; k--) {
          if (pickups[k] > 0) {
            if (limit2 >= pickups[k]) {
              limit2 -= pickups[k];
              pickups[k] = 0;
            } else {
              pickups[k] -= limit2;
              break;
            }
          }
        }
      }
    }
    return answer;
  }