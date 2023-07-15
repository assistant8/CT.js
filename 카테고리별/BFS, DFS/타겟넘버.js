function solution(numbers, target) {
    var answer = 0;
    
    function dfs(level, sum) {
        if(level===numbers.length) { //마지막 원소까지 갔을 때 sum 확인 및 현재 함수 종료
            if(sum===target) {
                answer++;
            }
            return;
        }
        
        //다음 레벨, sum은 현재레벨의 값 더하거나 빼서 넘김
        dfs(level+1, sum+numbers[level]);
        dfs(level+1, sum-numbers[level]);
    }
    dfs(0,0)
    return answer;
}