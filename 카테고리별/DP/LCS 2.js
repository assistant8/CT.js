const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const readline = require("readline");
const rl = readline.createInterface({
  input:
    process.platform === "linux"
      ? process.stdin
      : fs.createReadStream(filePath),
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [first, second] = input;
  const lcs = Array.from(Array(first.length + 1), () =>
    Array(second.length + 1).fill(0)
  );
  for (let i = 0; i <= first.length; i++) {
    const char1 = first[i - 1];
    for (let k = 0; k <= second.length; k++) {
      const char2 = second[k - 1];
      if (i === 0 || k === 0) lcs[i][k] = 0;
      else if (char1 === char2) lcs[i][k] = lcs[i - 1][k - 1] + 1;
      else lcs[i][k] = Math.max(lcs[i - 1][k], lcs[i][k - 1]);
    }
  }
//   console.log(lcs)

  const answer = [];
  let i = first.length;
  let k = second.length;
  while (i > 0 && k > 0) {
    if (lcs[i][k] === lcs[i - 1][k]) i--;
    else if (lcs[i][k] === lcs[i][k - 1]) k--;
    else {
      answer.push(first[i - 1]);
      i--;
      k--;
    }
  }
  const num = lcs[first.length][second.length];
  console.log(num);
  num !== 0 && console.log(answer.reverse().join(""));
  process.exit();
});

//lcs 배열 생성
//두 배열 반복문 돌면서 각 문자열 비교
    // 0 포함 시 무조건 0
    // 같으면 i-1 k-1꺼에 +1
    // 다르면 i-1 k / i k-1 중 큰 값

//lcs 반대로 돌면서 각 문자열 비교
    //lcs가 0이면 종료
    //lcs값을 i-1 k / i k-1 과 비교해 동일한 값 찾음
        //있으면 해당 값 -1
        //없으면 i-1 k-1 후 해당 문자 push

//종료 시 문자.reverse
