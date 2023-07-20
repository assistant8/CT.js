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