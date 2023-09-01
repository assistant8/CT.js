const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let N = fs.readFileSync(filePath).toString().trim();

let count1 = 0;
let count2 = 0;
let fibArr = [];

function fib(n) {
    if(n==1 || n==2) {
        count1++;
        return 1;
    } 
    else return (fib(n-1) + fib(n-2))
}

function fibonacci(n) {
    fibArr[1] = fibArr[2] = 1;
    for(let i=3; i<=n; i++) {
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
        count2++;
    }
    return fibArr[n]
}

fib(N);
fibonacci(N);

console.log(count1, count2)

//5면
//3 -> 2+1
//4 -> 3+2
//5 -> 4+3
//결국 +연산은 3번만 하면됨, 1,2는 배열 접근만 하면 되니까
//dp는 5의 값을 구하기 위해 3,4의 값을 배열에 저장해놓고 이용한다.