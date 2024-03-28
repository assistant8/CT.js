// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let countMap = new Map();
    for(let i=0; i<A.length; i++) {
        const num = A[i];
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    }
    
    let max = -1;
    for(let [key, value] of countMap) {
        if(key === value && max < value) {
            max = value;
        }
    }
    return max !== -1 ? max : 0
}
