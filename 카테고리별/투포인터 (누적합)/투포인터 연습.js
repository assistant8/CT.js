// 특정 숫자들이 들어있는 배열이 주어졌을 때, 배열 안에 가장 첫 번째로 두 숫자의 합이 0이 되는 값 2개를 배열에 담아 리턴하는 함수를 만들어보자.
// (배열의 값들은 낮은 수부터 정렬되어 있다.)

//완탐
function getSumZero1(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let k=i+1; k<arr.length; k++) {
            if(arr[i] + arr[k] === 0) return [arr[i], arr[k]]
        }
    }
    return -1;
}

//투포인터
function getSumZero(arr) {
    let p1 = 0, p2 = arr.length-1;

    while(p1 !== p2) {
        if(arr[p1] + arr[p2] === 0) return [arr[p1],arr[p2]];
        else if(arr[p1] + arr[p2] > 0) p2--;
        else if(arr[p1] + arr[p2] < 0) p1++;
    }
    return -1
}

// console.log(getSumZero([-2, -1, 1, 2, 3])); // [-2, 2] => 배열에서 두 숫자의 합이 0이 되는 가장 첫 번째 수는 -2이다.
// console.log(getSumZero([-2, -1, 1, 3,4,5,6])); // [-1, 1] 
// console.log(getSumZero([-1, 0, 1, 2])); // [-1, 1]
// console.log(getSumZero([0, 1, 2, 3])); // false => 두 숫자의 합이 0이 되는 숫자는 없다.




// 첫 번째 인자로 정렬되지 않은 숫자가 담긴 배열 arr와 두 번째 인자로 n이 주어질 때,
// 배열 안의 두 값이 n이 되는 경우의 수를 리턴하는 함수를 작성하시오.
// 조건에 충족하지 않으면 false를 리턴하시오.

function countSum(arr, n) {
	
}

countSum([8, 9, 1, 3, 12, 4, 8, 2, 3, 1], 11); // 5
countSum([1, 4, 2, 9, 3, 2], 5); // 3
countSum([1, 2, 3, 4], 10); // false
countSum([], 3); // false


// 연속 부분수열 개수 예제 
// 주어지는 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하라.
// 만약 M=6이고 수 열이 다음과 같다면 1 2 1 3 1 1 1 2 
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지이다.
function solution(m, arr) {
    let left = 0, right = 0;
    let count = 0;

    while (left < arr.length) {
      let sum = 0;
      for(let i=left; i<arr.length; i++) {
        sum += arr[i];
        if(sum === m) {
          count++;
          break;
        }
        if(sum > m) break;
      }
      left++;
    }
    console.log(count)
}

solution(4, [1, 2, 1, 3, 1, 1, 1, 2])
  // 테스트
//   describe('연속 부분수열1', () => {
//     it('기본 테스트 케이스', () => {
//       let a = [1, 2, 1, 3, 1, 1, 1, 2];
//       expect(solution(4, a)).toEqual(4);
//     });
//   });

function solutionexample(m, arr) {
  let sum = 0;
  let left = 0, right = 0;
  let count = 0;

  while (left < arr.length) {
    if (right === arr.length) { // 이번 left 단계에 m이 되지 못하면 
      left++;
      right = left;
      sum = 0;
      continue;
    }

    sum += arr[right++];

    if (sum === m) { // m과 같아지면 left 다음 단계 
      left++;
      right = left;
      sum = 0;
      count++;
    }
  }
  console.log(count)
}