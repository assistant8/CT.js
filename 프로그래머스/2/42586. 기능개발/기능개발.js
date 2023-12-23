function solution(progresses, speeds) {
    let answer = [];
    const length = speeds.length;
    let remain = progresses.map(e => 100-e);
    let finish = Array(length).fill(0);
    for(let i=0; i<length; i++) {
        const node = Math.ceil(remain[i]/speeds[i]);
        finish[i] = node;
    }
    
    let norm = finish[0];
    let count = 1;
    
    for(let i=1; i<length; i++) {
        if(norm >= finish[i]) {
            count++;
        } else {
            norm = finish[i];
            answer.push(count);
            count = 1;
        }
    }
    answer.push(count)
    
    
    return answer;
}