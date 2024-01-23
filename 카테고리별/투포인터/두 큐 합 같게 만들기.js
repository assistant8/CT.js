function solution(queue1, queue2) {
    var answer = 0;
    let target = 0;
    const leng = queue1.length;
    let sum1 = 0, sum2 = 0;
    let idx1 = 0, idx2 = 0;
    queue1.forEach(e => target += e);
    sum1 = target;
    queue2.forEach(e => target += e);
    sum2 = target - sum1;
    target = target/2;
    
    while(1) {
        if(answer > 4*leng) return -1; // 아래를 이걸로 대체
        // if(answer > 2 && areArraysEqual(origin1, queue1.slice(idx1))) return -1;
        if(sum1===target) {
            return answer;
        } else if(sum1>sum2) {
            const node = queue1[idx1];
            idx1++;
            queue2.push(node);
            sum1 -= node;
            sum2 += node;
            answer++;
        } else if(sum1<sum2) {
            const node = queue2[idx2];
            idx2++;
            queue1.push(node);
            sum2 -= node;
            sum1 += node;
            answer++;
        }
    }    
    return answer;
}

// console.log(solution([3, 2, 7, 2], [4,6,5,1]))
// console.log(solution([1,1], [1,5]))

//큐 합 구할 때 이전값에서 빼거나 더해주기만 해야지
//큐에서 shift 할 필요 있나, 터지면 frontIdx로 할까 => 둘다 해봤는데 fidx로 안하면 시간초과 남
//불가능 판단 -1
    //원래 매 순간 origin큐1와 현재큐1이 동일해지면 한 턴동안 해결 안되었다는 것이니 리턴하려 했는데 매 순간 두 긴 배열을 비교하려다 보니 시간초과
    //그래서 배열 길이 * 4만큼 루프를 돈다는 것은 위와 동일하게 원점으로 돌아왔다 (=루프)는 뜻이니 이걸로 수정

//이게 조합으로 구해질까? (섞일 수 있을까 - 3 2 7 2 에서 이후 3 7만 가질 수 있을까) 안됨 => 이건 결국 연속부분수열의 문제
//그러면 두 배열 중 큰 쪽에서 빼와서 작은 쪽에 넣어주는게 맞다 - 이거말곤 없을 듯 - 근데 이걸 최적화 해보자 



//투포인터로 다들 푼다, 이걸로도 풀어보자 
function solution1(queue1, queue2) {
    const queue = [...queue1, ...queue2];
    let sq1 = queue1.reduce(sum, 0);
    let sq2 = queue2.reduce(sum, 0);
    
    if (sq1 === sq2) return 0;
    
    const t_sum = (sq1+sq2);

    if (t_sum%2 != 0) return -1;
    
    const h_sum = t_sum/2;
    let start = 0;
    let end = queue1.length;
    let cnt = 0;
    
    while(cnt <= queue.length*3) {
        if (h_sum === sq1) {
            return cnt;
        } else if (h_sum > sq1){
            sq1 += queue[end];
            end++;
        } else {
            sq1 -= queue[start];
            start++;
        }
        
        cnt++;
    }
    
    return -1;
}

const sum = (a, b) => a + b;

console.log(solution1([3, 2, 7, 2], [4,6,5,1]))
console.log(solution1([1,1], [1,5]))