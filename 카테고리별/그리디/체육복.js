function solution(n, lost, reserve) {
    var copylost = lost.slice() 
    lost.sort((a,b)=>a-b)
    reserve.sort((a,b)=>a-b) //일단 정렬 
    lost = lost.filter(a=>!reserve.includes(a)) //여벌 있는데 잃어버린 애 삭제
    reserve = reserve.filter(a=>!copylost.includes(a)) 
    var answer = n - lost.length; //처음엔 전체 중 잃어버린 학생 제외

    for(let i=0; i<reserve.length; i++) { //여벌 있는 애들 루프 돌려서 
        for(let k=0; k<lost.length; k++) { //잃어버린 애들 앞뒤로 찾아봐서 나눠줌
            if(reserve[i]-1===lost[k]) {
                lost.splice(k,1) //잃어버린 애들 배열에서 삭제해줌 
                answer++;
                break;
            } else if(reserve[i]+1===lost[k]) {
                lost.splice(k,1)
                answer++;
                break;
            }
        }
    }
    return answer;
}


//-1부터 시작해야 선점 후 break 되어서 최대값이 나올 듯






//////////////////
//231103 새로운 풀이

// 1로 초기화 (n+1)
// lost 돌면서 -1, reserve 돌면서 +1
// 이 arr 돌면서 0이면 양쪽에 2인지 보고 빌리고 -1 해줌 
// idx 0은 예외 처리 
function solution(n, lost, reserve) {
    var answer = 0;
    const arr = new Array(n+1).fill(1); //1으로 초기화
    lost.forEach(e=>{
        arr[e]--;
    })
    reserve.forEach(e=>{
        arr[e]++;
    })
    
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
    arr.forEach(e=>{if(e>0) answer++})
    return answer-1;
}
