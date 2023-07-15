function solution(p, location) {
    var count = 0; //실행된만큼
    var index = location; //p 조정될때마다 같이 움직여야 
    
    for(let i=0; i<p.length; i++) {
        if(p[0]<p[i]) { //0보다 큰게 나타나면 = 맨 뒤로 가고 i=0 초기화 / index 조정
            p.push(p[0])
            p.shift();
            i=-1; 
            if(index===0) index=p.length-1; //현재 index면 맨 뒤로
            else index--; //아니면 앞으로 땡기기만 
        } 
        if(i===p.length-1) { //0이 가장 크다면 = 0 q에서 없애기만, count++
            if(index===0) return count+1; //index면 종료, 몇번째로 탈출했는지 return 
            count++;
            p.shift();
            i=-1;
            index--; //index가 아니면 앞으로 땡기기
        }
    }
}

//i=-1; 다음 for문에서 i=0으로 초기화 하려면...