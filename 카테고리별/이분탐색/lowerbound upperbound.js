// target 보다 큰 가장 왼쪽 원소 찾기
// const upperBound = (arr, target) => {
//   let le = 0,
//     ri = arr.length;
//   while (le < ri) {
//     const mid = Math.floor((le + ri) / 2);
//     if (target < arr[mid]) {
//       ri = mid;
//     } else {
//       le = mid + 1;
//     }
//   }
//   return ri;
// };

// // target 보다 작거나 같은 가장 왼쪽 인덱스 찾기
// const lowerBound = (arr, target) => {
//   let le = 0,
//     ri = arr.length;
//   while (le < ri) {
//     const mid = Math.floor((le + ri) / 2);
//     if (target <= arr[mid]) {
//       ri = mid;
//     } else {
//       le = mid + 1;
//     }
//   }
//   return ri;
// };


const lowerBound = (arr, target) => {
    let left = 0;
    let right = arr.length;

    while(left < right) {
        let mid = Math.floor((left+right)/2);
        
        if(arr[mid]>=target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

const upperBound = (arr, target) => {
    let left = 0;
    let right = arr.length;

    while(left < right) {
        let mid = Math.floor((left+right)/2);
        
        if(arr[mid]<=target) {
            left = mid+1;
        } else {
            right = mid;
        }
    }
    return right
}

// const array = [1,2,3,3,3,5,5,6];
const array = [1,2,2,3,3,3,4,6,7];
console.log(lowerBound(array, 8)); //3을 가지는 애들 중에 가장 최소 index
console.log(upperBound(array, 8)); //3보다 큰 애들 중에 가장 최소 index

//마지막은 left 나 right 무엇을 반환해도 상관없다.
// while(left < right)
// right = mid;
// let right = arr.length; 
    //  lower bound 와 upper bound 둘다 유의해야할 점은 모든 데이터가 target보다 작을 경우 데이터 범위 밖의 값을 리턴해야 하기 때문에 일반적인 이진탐색과 달리 right = arr.length 로 지정
