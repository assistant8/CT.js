//
function solution(n, times) {   
    times.sort((a,b)=>a-b);
    var left = 0;
    var right = n*times[times.length-1];
    
    while(left<=right) { //두 잣대가 
        var mid = Math.floor((left+right)/2);
        var count = 0;
        
        for(i=0; i<times.length; i++) { //심사대 개수만큼
            count += Math.floor(mid/times[i])
        }
        console.log(count, left)
        
        if(count>=n) { //n이어도 최소를 찾아야하므로 왼쪽에서 찾기
            right=mid-1; 
        } else {
            left=mid+1;
        }
    }
    
    return left;
}

// 이진 탐색은 탐색 범위를 절반씩 줄여가며 탐색하는 특성을 가지고 있습니다. 이를 이용하여 시간 복잡도를 효율적으로 개선할 수 있습니다. 만약 일반적인 선형 탐색을 사용한다면, 시간이 많이 소요될 수 있습니다.
// 문제에서 요구하는 것은 "모든 사람이 심사를 받는 데 걸리는 최소 시간" 입니다. 이를 구하기 위해서는 최소 시간을 찾아야 합니다. 이진 탐색은 정렬된 배열에서 특정 값을 찾는데 주로 사용되지만, 이 문제에서는 최소 시간을 찾는 데에도 활용할 수 있습니다. 이진 탐색은 탐색 범위를 반씩 줄여가면서 최소 시간을 찾을 수 있습니다.
// 이 문제는 최적화 문제입니다. 즉, 최소 시간을 찾는 것이 목표입니다. 이진 탐색은 최적화 문제에 적합한 알고리즘입니다. 최소 시간을 찾기 위해 가능한 시간 범위를 좁혀가면서 탐색하기 때문에 효율적으로 최적해를 찾을 수 있습니다.

// 기본 이진탐색 예제

// def binary_search(array, target, start, end):
//     while start <= end:
//         mid = (start + end) // 2

//         # 원하는 값 찾은 경우 인덱스 반환
//         if array[mid] == target:
//             return mid
//         # 원하는 값이 중간점의 값보다 작은 경우 왼쪽 부분(절반의 왼쪽 부분) 확인
//         elif array[mid] > target:
//             end = mid - 1
//         # 원하는 값이 중간점의 값보다 큰 경우 오른쪽 부분(절반의 오른쪽 부분) 확인
//         else:
//             start = mid + 1

//     return None

// 첫 풀이 - 런타임 에러

// 이분탐색은 한번 런타임 에러를 맞아야 시도하는 건지..
    // var submit = times.length;
    // var arr = [];
    // for(i=0; i<submit; i++) {
    //     for(k=1; k<=n; k++) {
    //         arr.push(times[i]*k)
    //     }
    // }
    // arr.sort((a,b)=>a-b);