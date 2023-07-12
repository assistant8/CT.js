function solution(citations) {
    var answer = 0;
    var l = citations.length;
    for(let i=0; i<=l; i++) { //h값 = i => 1부터 길이까지 시도해보는 거임, 최댓값 나올 때까지
        count = 0;
        for(let k=0; k<l; k++) { //배열 중에 i보다 큰 값 카운트
            if(citations[k]>=i) count++;
        }
        if(count>=i) {
            console.log("10")
            continue; //count가 i 이상일 때, 최대를 위해 컨티뉴
        }
        else {
            console.log("14")
            return i-1; //count가 못미치면 이전것이 최대이니 return 
        }
    }
    console.log("18")
    return l
    
}