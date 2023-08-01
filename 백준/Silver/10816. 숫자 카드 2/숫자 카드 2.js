const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const arr1 = input[1].split(" ").map(Number);
const M = Number(input[2]);
const arr2 = input[3].split(" ").map(Number);

const countMap = new Map();
for (let num of arr1) {
  countMap.set(num, (countMap.get(num) || 0) + 1);
}

const answer = [];
for (let num of arr2) {
  answer.push(countMap.get(num) || 0);
}

console.log(answer.join(" "));
