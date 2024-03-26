// //1 5 9
// //1 5 10
// //... 4 8 12 이런식으로 골라서 합을 구하고 싶다면? 

// const arr = [
//     [ 1, 2, 3, 4 ],
//     [ 5, 6, 7, 8 ],
//     [ 9, 10, 11, 12 ],
// ]



// function getCombination(array, selectNumber) {
//     const result = [];
//     if(selectNumber===1) {
//         return array.map(element=>[element])
//     }


//     array.forEach((fixed, index, origin)=>{
//         const rest = origin.slice(index+1)
//         const combinations = getCombination(rest, selectNumber-1);
//         const attached = combinations.map(combination=>[fixed, ...combination])
//         result.push(...attached)
//     })
//     return result 
// }



// function getPermutation(array, selectNumber) {
//     const result = [];
//     if(selectNumber===1) {
//         return array.map(element=>[element]);
//     }

//     array.forEach((fixed, index, origin)=>{
//         const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
//         const permutations = getPermutation(rest, selectNumber-1);
//         const attached = permutations.map(permutation=>[fixed, ...permutation]);
//         result.push(...attached)
//     })
//     return result
// }

// const array = [1,5,3,4]
// // console.log(getPermutation(array, 3))









// //첫번째 원소가 큰 것을 고르되 동일하면 두번째 원소가 큰 것을 고르다 
// const a = [
//     [ 0, 0 ],    [ 0, 0 ],
//     [ 0, 6300 ], [ 0, 10800 ],
//     [ 0, 0 ],    [ 0, 0 ],
//     [ 0, 6300 ], [ 0, 10800 ],
//     [ 0, 4900 ], [ 0, 4900 ],
//     [ 1, 0 ],    [ 1, 5400 ],
//     [ 0, 8400 ], [ 0, 8400 ],
//     [ 1, 4200 ], [ 0, 19200 ]
//   ]

// //1) 소팅해서 첫번째꺼 고르는 방법
// a.sort((a,b)=>{
//     if(a[0]===b[0]) {
//         return a[1]-b[1]
//     }
//     return a[0]-b[0]
// })

// console.log(a)

// //2) 조건문으로 
// let max = [-1, -1];

// for(let arr of a) {
//     if(arr[0]>max[0]) {
//         max = arr;
//     } else if(arr[0]===max[0]) {
//         if(arr[1]>max[1]) max = arr;
//     }
// }

// console.log(max);

// //3) 조건문 2 - 한 줄에 검사
// let maxElement = null;

// for (const arr of inputArray) {
//     if (maxElement === null) {
//         maxElement = arr;
//     } else {
//         if (arr[0] > maxElement[0] || (arr[0] === maxElement[0] && arr[1] > maxElement[1])) {
//             maxElement = arr;
//         }
//     }
// }

// console.log(maxElement);

const n = 3;
let [x, y] = [2, 2];
const [px, py] = [-5, 5];
x = x+px;
y = y+py;

if(x>=0) x = x%n;
else x = ((x%n) + n)%n;
if(y>=0) y = y%n;
else y = ((y%n) + n)%n;

console.log([x,y])


function sol(n,m) {
    const seq = new Array(m).fill(0);
    const visited = new Array(n).fill(0);
    let result = [];

    function dfs(k, idx) {
        if(k===m) {
            result.push([...seq]);
            return result;
        }

        for(let i=idx; i<=n; i++) {
            if(!visited[i]) {
                seq[k] = i;
                visited[i] = 1;
                dfs(k+1, i);
                visited[i] = 0;
            }
        }
    }
    dfs(0,1);
}