const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim()

let sum = 0;
input = input.split("-").map(e=>e.split("+").map(Number).reduce((a,b)=>a+b))
input.forEach((e,i)=>{
    if(i!==0) sum -= e;
    else sum = e
})
console.log(sum)
//-로 일단 split 후 각 원소들 다 계산 
//첫 원소에서 나머지 원소 다 뺌 (나머지 식들 다 괄호 감싸는 거지)
1-2-3+4
[ '1', '2', '3+4' ]
[ [ '1' ], [ '2' ], [ '3', '4' ] ]
[ [ 1 ], [ 2 ], [ 3, 4 ] ]
[ 1, 2, 7 ]
-8

/////////////////////////////////////괄호를 한번만 쓸 수 있는줄
// input = input.split(/([+-])/g) 

// input = input.map((e, i)=>{
//     if(i%2===0) return Number(e);
//     else return e;
// })

// const add = [];
// const minus = [];
// let mcount = 0;

// for(let i=0; i<input.length; i++) {
//     if(input[i]==="-") mcount++;
//     if(mcount===1) { //마이너스존
//         if(i%2===0) minus.push(input[i])
//     } else { //마이너스존 전이거나 후 
//         if(i%2===0) {
//             if(input[i-1]==="-") minus.push(input[i])
//             else add.push(input[i])
//         } 
//     }
// }

// // console.log(add)
// // console.log(minus)

// let sum = 0;
// add.forEach(e=>sum+=e)
// minus.forEach(e=>sum-=e)
// console.log(sum)



