function solution(queue1, queue2) {
    var answer = 0;
    let target = 0;
    const leng = queue1.length;
    // const origin1 = queue1.slice();
    let sum1 = 0, sum2 = 0;
    let idx1 = 0, idx2 = 0;
    queue1.forEach(e => target += e);
    sum1 = target;
    queue2.forEach(e => target += e);
    sum2 = target - sum1;
    target = target/2;
    
    while(1) {
        if(answer > 4*leng) return -1;
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