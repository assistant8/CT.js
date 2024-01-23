const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, array, target] = fs.readFileSync(filePath).toString().trim().split("\n");
array = array.split(" ").map(e => Number(e));
N = Number(N);
target = Number(target);
array.sort((a,b) => a-b);

let left = 0;
let right = N - 1;
let count = 0;

while(left < right) {
    if(array[left] + array[right] === target) {
        count++;
        left++;
    } else if(array[left] + array[right] > target) {
        right--;
    } else left++;
}

console.log(count);