//ㅇㅋ 버튼 안누르거나 아무것도 안누르는 것 처리 
//제출된 문자열 모두 구하기 

//입력 1줄 - h w r h0 w0 h1 w1
//2줄 - 터치 개수
//3줄 - x y 좌표 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let h, w, r, a, b, c, d;
let num;
const arr = [[2,2], [3,4], [4,6]];

[h, w, r, a, b, c, d] = [5, 5, 2, 1, 1, 2, 2];
num = 3;
main();

// rl.on('line', (input) => {
//   count++;
//   if(count === 1) {
//     [h, w, r, a, b, c, d] = input.split(" ").map(Number);
//   } else if(count === 2) {
//     num = Number(input);
//   } else {
//     arr[count-3] = input.split(" ").map(Number)
//     if(count === num+2) main();
//   }
// })

function main() {
  // console.log(arr)
  let result = "";
  let answer = [];
  for(let i=0; i<num; i++) {
    const [x,y] = arr.shift();
    if(x>=b && x<=b+2*r) { //1째줄
      if(y>=a && y<=a+2*r) result += "1";
      if(y>=a+2*r+c && y<=a+4*r+c) result += "4";
      if(y>=a+4*r+2*c && y<=a+6*r+2*c) result += "7";
      if(y>=a+6*r+3*c && y<=a+8*r+3*c) result = result.slice(0,result.length-1); //
    } else if(x>=b+2*r+d && x<=b+4*r+d) {
      if(y>=a && y<=a+2*r) result += "2";
      if(y>=a+2*r+c && y<=a+4*r+c) result += "5";
      if(y>=a+4*r+2*c && y<=a+6*r+2*c) result += "8";
      if(y>=a+6*r+3*c && y<=a+8*r+3*c) result += "0";
    } else if(x>=b+4*r+2*d && x<=b+6*r+2*d) {
      if(y>=a && y<=a+2*r) result += "3";
      if(y>=a+2*r+c && y<=a+4*r+c) result += "6";
      if(y>=a+4*r+2*c && y<=a+6*r+2*c) result += "9";
      if(y>=a+6*r+3*c && y<=a+8*r+3*c) {
        answer.push(result)
        result = "";
      }
    }
    console.log(result, i)
  }
  answer.forEach(e=>{
    console.log(e)
  })
}











