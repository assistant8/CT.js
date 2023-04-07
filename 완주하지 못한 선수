// 첫번째 풀이 - 실패
//splice 때문에 if에 들어간 원소가 지워져서 배열이 짧아짐, 그다음 원소(k)는 넘어가버림
//slice는 원본 배열을 지우지는 못함, 결국 splice slice로 할 수 없음
function solution(participant, completion) {
    var answer = '';
    var p = [...participant]
    
    for(var k=0; k<participant.length; k++) {
        for(var i=0; i<completion.length; i++) {
            if(participant[k]==completion[i]) {
                participant.splice(k,1)
                console.log(k)
            }                
        }
    }
    console.log(participant)
    return answer;
}

//두번째 풀이
//하나만 다르므로 두 배열 정렬시켜서 다르게되면 그 원소 결과값으로
function solution(participant, completion) {
    var answer = '';
    
    participant.sort()
    completion.sort()
    console.log(participant, completion)
    for(var k=0; k<participant.length; k++) {
        if(participant[k]!==completion[k]){
            answer = participant[k];
            break;
        }
    }
}


//다른 사람 해시 이용 풀이
function solution(participant, completion) {
    const myMap = new Map();
    
        for ( const p of participant){ //p 모두 map의 key로 넣고 value=1
            if(!myMap.get(p)){
                myMap.set(p, 1);
            }else{
                myMap.set(p, myMap.get(p)+1); //중복 시 그 p value++
            }
        }
    
        for(const c of completion){ //map에 c 있으면 value--, c에 없는 미완주자는 1이상이겠지
            if(myMap.get(c)){
                myMap.set(c, myMap.get(c)-1);
            }
        }
        
        for(const p of participant){ //map 요소 중 value가 1 이상일 경우 그 key가 정답
            if(myMap.get(p) && myMap.get(p) >=1 ){
                answer = p;
            }
        }
}
