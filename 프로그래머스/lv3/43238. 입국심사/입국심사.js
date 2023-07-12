// function solution(n, times) {
//     // 이분탐색은 한번 런타임 에러를 맞아야 시도하는 건지..
//     // var submit = times.length;
//     // var arr = [];
//     // for(i=0; i<submit; i++) {
//     //     for(k=1; k<=n; k++) {
//     //         arr.push(times[i]*k)
//     //     }
//     // }
//     // arr.sort((a,b)=>a-b);
    
//     times.sort((a,b)=>a-b);
//     var left = 0;
//     var right = n*times[times.length-1];
    
//     while(left<=right) { //두 잣대가 
//         var mid = Math.floor((left+right)/2);
//         var count = 0;
        
//         for(i=0; i<times.length; i++) { //심사대 개수만큼
//             count += Math.floor(mid/times[i])
//         }
//         console.log(count, mid)
        
//         if(count>=n) { //n이어도 최소를 찾아야하므로 왼쪽에서 찾기
//             right=mid; 
//         } else {
//             left=mid;
//         }
//     }
    
//     return mid;
// }

function solution(n, times) {
  times.sort((a, b) => a - b); // 심사 시간을 오름차순으로 정렬합니다.

  let left = 1; // 최소 시간 범위의 시작값
  let right = times[times.length - 1] * n; // 최소 시간 범위의 끝값

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // 중간값 계산

    let count = 0; // 심사할 수 있는 사람의 수

    for (let i = 0; i < times.length; i++) {
      count += Math.floor(mid / times[i]); // 중간값으로 해당 심사관이 처리할 수 있는 사람의 수를 더합니다.
    }

    if (count >= n) {
      // 심사할 수 있는 사람의 수가 n보다 크거나 같으면
      right = mid - 1; // 최소 시간 범위를 왼쪽으로 좁힙니다.
    } else {
      left = mid + 1; // 최소 시간 범위를 오른쪽으로 좁힙니다.
    }
  }

  return left; // 최소 시간을 반환합니다.
}

