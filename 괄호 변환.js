function solution(p) {
    var answer = '';
    if(p==="") return "";
    if(isRight(p)) return p;
    var u = ""
    var v = ""

    for(let i=1; i<p.length+1; i++) { // 최소 단위의 u 분리하기
        if(isBalance(p.slice(0,i))) {
            u=p.slice(0,i)
            v=p.slice(i)
            console.log("u", u, "v", v, i)
            break;
        }
    }
    
    if(isRight(u)) { //u가 바로 올바른 문자열이면 
        console.log("11", u, v)
        return u + solution(v); //u가 이미 완성 시 v에 대해서만 재귀 
    }
    else {
        console.log("18")
        answer += "(";
        answer += solution(v);
        answer += ")";
        u = u.substring(1,u.length-1)
        console.log("u!!", u)
        for(let i=0; i<u.length; i++) {
            if(u[i]==="(") answer += ")"
            else answer+= "("
        }
        // answer += u.split("").reverse().join("");
        return answer;
    }   
}

function isBalance(p) {
    count1=0;
    count2=0;

    for(let i=0; i<p.length; i++) {
        if(p[i]==="(") count1++
        else count2++
    }
    
    if(count1===count2) return true;
    else return false;
}

function isRight(p) {
    var stack=[];
    var top = -1;
    for(let i=0; i<p.length; i++) {
        stack.push(p[i]);
        top++;
        if(stack[top-1]==="(" && stack[top]===")") {
            stack.pop();
            stack.pop();
            top--;
            top--;
        }
    }
    if(top<0) return true;
    else return false;
}

// console.log(isBalance("()))((()"))
// console.log(isBalance("(()())()"))