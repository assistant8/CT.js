// 백트래킹 

// 소수 판별 함수
function isPrime(n){
    if(n <= 2){
        return true
    }
    for(let i = 2; i < Math.sqrt(n)+1 ; i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

//solution
function solution(nums) {
    let answer = 0;
    let visited = new Array(nums.length).fill(0)
    // DFS (depth : 재귀 호출 횟수, index : 조합을 위해 인덱스 저장, result : 숫자 저장 array)
    function dfs(depth,index,result){
        if(depth === 3){
            if(isPrime(result.reduce((a,b)=>a+b))){
                answer++;
            }
            return
        }
        for (let i=index; i < nums.length; i++){
            if(!visited[i]) {
                visited[i] = 1
                dfs(depth+1, i+1, [...result, nums[i]])
                visited[i] = 0
            }
        }
        return
    }
    dfs(0, 0, [])
    return answer
}

