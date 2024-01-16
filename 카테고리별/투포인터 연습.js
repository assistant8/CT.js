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



//연속 부분수열 개수 예제 
function solution(m, arr) {
    let answer = 0;
  
    let left = 0;
    let right = 0;
    let sum = 0;
  
    while (left < arr.length) {
      if (right === arr.length) {
        left++;
        right = left;
        sum = 0;
        continue;
      }

      sum += arr[right++];
  
      if (sum === m) {
        left++;
        right = left;
        sum = 0;
        answer++;
      }
    }
    console.log(answer)
}

solution(4, [1, 2, 1, 3, 1, 1, 1, 2])
  // 테스트
//   describe('연속 부분수열1', () => {
//     it('기본 테스트 케이스', () => {
//       let a = [1, 2, 1, 3, 1, 1, 1, 2];
//       expect(solution(4, a)).toEqual(4);
//     });
//   });