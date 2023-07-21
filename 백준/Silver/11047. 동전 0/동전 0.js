const fs = require('fs');
let [N, ...nums] = fs.readFileSync('dev/stdin').toString().trim().split(/\s+/).map(Number);

let price = nums.shift();
nums.sort((a, b) => b - a);

let count = 0;

for (let i = 0; i < nums.length; i++) {
  if (price < nums[i]) {
    continue;
  } else {
    const value = Math.floor(price / nums[i]);
    price -= value * nums[i];
    count += value;

    if (price === 0) {
      break;
    }
  }
}

console.log(count);