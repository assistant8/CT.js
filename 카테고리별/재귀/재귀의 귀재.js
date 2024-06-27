let callCount = 0

function recursion(s, l, r) {
    if(l === 0) callCount = 0
    callCount++
    if(l >= r) return 1;
    else if(s[l] !== s[r]) return 0;
    else return recursion(s, l+1, r-1);
}

function isPalindrome(s){
    return recursion(s, 0, s.length-1);
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")
input.shift()
const result = input.map((a, i) => {
    return `${isPalindrome(a)} ${callCount}`
})

console.log(result.join("\n"))