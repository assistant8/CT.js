const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, A, M, B] = fs.readFileSync(filePath).toString().trim().split("\n")

A = A.split(" ").map(Number)
// console.log(A)
B= B.split(" ").map(Number)
// console.log(B)


A.sort((a,b)=>a-b);
let answer = [];
for(let i=0; i<B.length; i++) { 
    let left = 0; 
    let right = N-1; //index로!!
    let target = B[i];
    // console.log("\n", "i", i)

    while(left <= right) { //A에서 l,m,r을 조정하며 target을 좁히는 과정 
        let mid = Math.floor((left+right)/2); //floor! 
        // console.log("left, right", left, right)

        if(A[mid]===target) { //찾으면 i 종료 
            answer.push(1)
            break;  
        } else if(A[mid]>target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        
        if(left>right) {
            answer.push(0)
            break;
        }
    }

}
console.log(answer.join('\n'))


//left, right, mid는 index이다!!! 