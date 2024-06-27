const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [first, second] = fs.readFileSync(filePath).toString().trim().split("\r\n");
first = first.split("");
second = second.split("");
second = second.reverse();

const firstLength = first.length;
const secondLength = second.length;
const stack = [];

for(let i=1; i<=firstLength; i++) {
    const char = first[firstLength-i];
    stack.push(char);
    check();
}

const answer = stack.length === 0 ? "FRULA" : stack.reverse().join("");
console.log(answer);

function check() {
    const stackLength = stack.length;
    for(let k=0; k<secondLength; k++) {
        const char = stack[stackLength-secondLength+k];
        if(second[k]!==char) return;
    }
    stack.splice(stackLength-secondLength);
}


// 원본 문자열을 뒤에서부터 pop해서 stack에 삽입 
    // stack에서 매번 second 길이만큼 검사 - 한번만 하면 됨