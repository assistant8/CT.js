function solution(stones, k) {
    var answer = 0;
    let left = 1;
    let right = 200000000;
        // Math.max(...stones);
    
    while(left <= right) {
        let mid = Math.floor((left+right)/2); //몇 명이 지나갔는지 = 배열마다 뺄 숫자
        let count = 0; // 0이하 돌들 연속 몇개 있나
        
        for(let i=0; i<stones.length; i++) {
            if(stones[i] - mid <= 0) count++;
            else count = 0;
            if(count >= k) break; //못 건너는 케이스면 멈추고 이 count 유지
        }
        
        if(count >= k) { //못 건넘
            right = mid - 1;
        } else { //건넘 - 건격 더 키워보자
            answer = mid + 1; // 여기가 가능한 케이스니까
            left = mid + 1;
        }
    }
    return answer;
}



//오답노트
let copy = stones.slice();
        
        for(let i=0; i<stones.length; i++) {
            copy[i] -= mid;
            if(copy[i] <= 0) count++;
        }

// 처음에 stones[i]에서 그대로 mid를 빼서 다음 케이스에 그게 반영되는 실수..
// 그래서 각 케이스마다 copy 배열을 둬서 했는데 효율성 초과
// 그래서 이렇게 배열을 바꾸지 않고 빼면 어떤 값이다 이렇게 함 = 해결
        // if(stones[i] - mid <= 0) count++;

// 또한 이분탐색에서 괜히 right 값 유동적이게 바꾸지 말고 최대값 박자. 그게 최악의 경우를 봤을 때 초과 안난다
        let right = 200000000;
        // Math.max(...stones);