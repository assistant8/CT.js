function solution(n, lost, reserve) {
    var answer = 0;
    const arr = new Array(n+1).fill(1); //1으로 초기화
    lost.forEach(e=>{
        arr[e]--;
    })
    reserve.forEach(e=>{
        arr[e]++;
    })
    console.log(arr)
    
    for(let i=1; i<=n; i++) {
        if(arr[i]===0) {
            if(arr[i-1]===2 && i>1) {
                arr[i-1]--;
                arr[i]++;
                continue;
            } else if(arr[i+1]===2 && i<n) {
                arr[i+1]--;
                arr[i]++;
                continue;
            }
        }
    }
    console.log(arr)
    arr.forEach(e=>{if(e>0) answer++})
    return answer-1;


// 1로 초기화 (n+1)
// lost 돌면서 -1, reserve 돌면서 +1
// 이 arr 돌면서 0이면 양쪽에 2인지 보고 빌리고 -1 해줌 
// idx 0은 예외 처리 
}