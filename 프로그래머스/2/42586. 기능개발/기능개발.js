function solution(progresses, speeds) {
    var answer = [];
    const length = speeds.length;
    let remain = progresses.map(e => 100-e);
    let finish = Array(length).fill(0);
    for(let i=0; i<length; i++) {
        const node = Math.ceil(remain[i]/speeds[i]);
        finish[i] = node;
    }
    console.log(finish)
    
    for(let i=0; i<length; i++) {
        if(finish[i]<finish[i+1]) answer.push(1);
        else {
            const count = delay(i, finish[i]);
            console.log(i, count)
            answer.push(count)
            i+=(count-1);
        }
    }
    
    function delay(stop, norm) {
        let count = 1;
        for(let k=stop+1; k<length; k++) {
            if(norm >= finish[k]) count++;
            else return count;
        }
        return count;
    }
    
    return answer;
}