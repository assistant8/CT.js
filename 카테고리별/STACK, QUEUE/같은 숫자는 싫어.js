function solution(arr)
{
    var answer = [];
    var top = -1;
    arr.forEach((e,i,array)=>{
        if(answer[top]!==e) { //현재 스택 top이 같은 숫자가 아니면 넣기
            answer.push(e);
            top++;
        }        
    })       
    return answer;
}