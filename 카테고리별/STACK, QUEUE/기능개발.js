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
        if(i===remainday.length-1) answer.push(top+1)
    }
    return answer;
}
