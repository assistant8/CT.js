function solution(numbers, target) {
    var answer = 0;
    
    function dfs(level, sum) {
        if(level===numbers.length) { //마지막 원소까지 갔을 때 sum 확인 및 현재 함수 종료
            if(sum===target) {
                answer++;
            }
            return;
        }
        
        //다음 레벨, sum은 현재레벨의 값 더하거나 빼서 넘김
        dfs(level+1, sum+numbers[level]);
        dfs(level+1, sum-numbers[level]);
    }
    dfs(0,0)
    return answer;
}

// 이대로 정답이 되긴하는데 런타임에러 2개 나긴함 
// function solution(numbers, target) {
//     var answer = 0;
    
//     const dupPermutation = getPermutation(["+", "-"], numbers.length)
//     console.log(dupPermutation)
    
//     for(let i=0; i<dupPermutation.length; i++) {
//         const p = dupPermutation[i]; //[+, -, +]
//         let sum = 0;
//         for(let k=0; k<p.length; k++) {
//             if(p[k]==='-') sum+=(-numbers[k])
//             else sum+=numbers[k]
//         }
//         // console.log(numbers, sum)
//         if(sum===target) answer++
//     }
//     return answer;
// }

// function getPermutation(arr, selectNumber) {
//   const result = [];
//   if (selectNumber === 1) {
//     return arr.map((value) => [value]);
//   }

// 	//[1,2,3,4] 이면은 처음엔 1을 fixed로.. 이렇게 4번 루프 
//   arr.forEach((fixed, index, origin) => {
//     const rest = arr;
// 		//fixed 제외한 나머지 배열
//     const permutations = getPermutation(rest, selectNumber - 1);
// 		//나머지 배열에 대한 순열 
//     const attached = permutations.map((permutation) => [fixed, ...permutation]);
// 		//attached = 나머지 배열에 대한 순열 + fixed 
//     result.push(...attached);
//   });

//   return result;
// }
