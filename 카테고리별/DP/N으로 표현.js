//
function solution(N, number) {
  const memo = new Array(9).fill().map(() => new Set());

  for (let i = 1; i <= 8; i++) {
    memo[i].add(parseInt("1".repeat(i) * N)); //일단 n으로만 된 숫자 (5555)

    for (let j = 1; j <= i; j++) {
      for (const operand1 of memo[j]) {
        for (const operand2 of memo[i - j]) {
          memo[i].add(operand1 + operand2);
          memo[i].add(operand1 - operand2);
          memo[i].add(operand1 * operand2);
          if (operand2 !== 0) {
            memo[i].add(Math.floor(operand1 / operand2));
          }
        }
      }
    }

    if (memo[i].has(number)) {
      return i;
    }
  }

  return -1; // N으로 표현할 수 없는 경우
}
