function solution(progresses, speeds) {
    var answer = [];
    var remain = progresses.map(e=>100-e);
    var remainday = speeds.map((e,i)=>{
        return Math.ceil(remain[i]/e)
    })
    
    var stack = [remainday[0]];
    var top = 0;
    for(let i=1; i<remainday.length; i++) {
        if(top===-1 || stack[0]>=remainday[i]) { //스택이 비어있거나 RD가 스택0보다 작으면 push
            stack.push(remainday[i]);
            top++;
        } else { //스택0보다 큰게 나타나면 = 지금 스택 top 기록, 스택 초기화, 현재 큰거 스택에 push
            answer.push(top+1) //현재 스택 기록 후
            stack.length = 0; //스택 초기화
            top = -1;
            stack.push(remainday[i]) //현재꺼 스택에 push 
            top++;
        }
        if(i===remainday.length-1) answer.push(top+1) //마지막 남은 것 ans에 push
        console.log(stack)
    }
    return answer;
}

// 231223 다시 풀어본 풀이 
function solution(progresses, speeds) {
    var answer = [];
    const length = speeds.length;
    let remain = progresses.map(e => 100-e);
    let finish = Array(length).fill(0);
    for(let i=0; i<length; i++) {
        const node = Math.ceil(remain[i]/speeds[i]);
        finish[i] = node;
    }
    
    for(let i=0; i<length; i++) {
        if(finish[i]<finish[i+1]) answer.push(1);
        else {
            const count = delay(i, finish[i]);
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

// 기존 for문을 진행하다가 특정 조건에서 거기서 또 다른 for문을 통해 체크를 하는 등의 수행이 있는
// 같은 방향으로 for문이 하나씩 진행되긴함, 그러면 2번 for문에서 진행된 정도를 1번 for문에 적용 (i=k+count) 해야되는.. 불편함이 생기는데 

// 아래는 위 방법에서 i i+1 대소 관계에 상관없이 무조건 norm을 지정해서 그것과 비교하는 로직으로 통일함

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