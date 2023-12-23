function solution(cards) {
    const length = cards.length;
    let visited = Array(length).fill(0);
    let groupNumberArray = []; // 각 그룹의 멤버 수 저장
    let count = 0; // length될때까지 memeber 추가 시 ++
    cards.unshift(0);
    console.log(cards)
    
    for(let i=1; i<=length; i++) {
        if(visited[i]) continue;
        let mem = 1;
        let cur = cards[i];
        visited[i] = 1;
        
        while(1) {
            if(visited[cur]) break;
            visited[cur] = 1;
            cur = cards[cur];
            mem++;
        }
        
        groupNumberArray.push(mem);
        count+=mem;
        if(count >= length) break;
    }
    console.log(groupNumberArray)
    if(groupNumberArray.length <= 1) return 0;
    groupNumberArray.sort((a,b)=>b-a);    
    return groupNumberArray[0] * groupNumberArray[1];
}
