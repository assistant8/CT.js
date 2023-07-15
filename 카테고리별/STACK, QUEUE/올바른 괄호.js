function solution(s){
    var answer = true;
    var stack = [];
    var arr = s.split("");
    var top = -1;
    
    for(var i=0; i<arr.length; i++) {
        const cur = arr[i];
        stack.push(cur); //넣고
        top++;
        if(stack[top]==')' && stack[top-1]=='(') {
            stack.pop();
            stack.pop();
            top = top-2;
        } //충족되면 제거
    }
    
    answer = stack.length===0 ? true : false
    return answer;
}