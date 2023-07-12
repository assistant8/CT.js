function solution(priorities, location) {
    var answer = 0;
    var index = location;
    
    for(var i=0; i<priorities.length; i++) {
        for(var k=i+1; k<priorities.length; k++) {
            if(priorities[i]<priorities[k]) { //뒤에 큰 수가 있는 경우
                priorities.push(priorities[i]) //현재꺼 뒤에 넣고
                priorities.splice(i,1) //현재꺼 삭제
                if(index==i){ //타겟이 현재 i 일때
                    index=priorities.length-1
                }else{ 
                    index-=1
                }
                console.log(i, priorities)
                i--; //이거 삭제됐으니 새로운 원소인 거기서부터 다시 시작(위에서 i++로 원상복구)
                break; //i로 돌아가라
            }
            if(k==priorities.length-1){ //i가 제일 클 때 (맨앞)
                if(index==i) { //타겟이 제일 클 때 - 종료시키기
                    return index+1
                }  
                //뭐 안없애고 안추가, i만 ++
                
                
            }
        }        
    }
    index++ //번째 이므로
    console.log(priorities)
    console.log(index)
    return index;
}