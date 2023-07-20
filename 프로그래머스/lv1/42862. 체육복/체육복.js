function solution(n, lost, reserve) {
    var copylost = lost.slice() 
    lost.sort((a,b)=>a-b)
    reserve.sort((a,b)=>a-b) //일단 정렬 
    lost = lost.filter(a=>!reserve.includes(a))
    reserve = reserve.filter(a=>!copylost.includes(a))
    console.log(lost, reserve)
    var answer = n - lost.length; //처음엔 전체 중 잃어버린 학생 제외
    
    for(let i=0; i<reserve.length; i++) {
        for(let k=0; k<lost.length; k++) {
            if(reserve[i]-1===lost[k]) {
                console.log(reserve[i], lost[k])
                lost.splice(k,1)
                answer++;
                break;
            } else if(reserve[i]+1===lost[k]) {
                console.log(reserve[i], lost[k])
                lost.splice(k,1)
                answer++;
                break;
            }
        }
    }
    return answer;
}
    
    
//-1부터 시작해야 선점 후 break 되어서 최대값이 나올 듯