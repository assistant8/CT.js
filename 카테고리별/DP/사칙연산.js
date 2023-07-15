//이해 필요
function solution(arr) {
    const n = Math.floor(arr.length / 2) + 1; // 숫자 개수
    const minDP = [];
    const maxDP = [];
  
    // DP 배열 초기화
    for (let i = 0; i < n; i++) {
      minDP[i] = new Array(n).fill(Number.MAX_SAFE_INTEGER);
      maxDP[i] = new Array(n).fill(Number.MIN_SAFE_INTEGER);
      minDP[i][i] = parseInt(arr[i * 2]); // 숫자만 DP에 저장
      maxDP[i][i] = parseInt(arr[i * 2]);
    }
  
    // DP 연산
    for (let gap = 1; gap < n; gap++) {
      for (let i = 0; i < n - gap; i++) {
        const j = i + gap;
        for (let k = i; k < j; k++) {
          const operator = arr[k * 2 + 1];
          const minVal = eval(`${minDP[i][k]}${operator}${minDP[k + 1][j]}`);
          const maxVal = eval(`${maxDP[i][k]}${operator}${maxDP[k + 1][j]}`);
          minDP[i][j] = Math.min(minDP[i][j], minVal);
          maxDP[i][j] = Math.max(maxDP[i][j], maxVal);
        }
      }
    }
  
    return maxDP[0][n - 1];
  }
  