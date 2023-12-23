function solution(cards) {
    const length = cards.length;
    let visited = Array(length).fill(0);
    let groupNumberArray = []; // 각 그룹의 멤버 수 저장
    let count = 0; // length될때까지 memeber 추가 시 ++
    cards.unshift(0);
    
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

        count+=mem; //이 두줄은 효율성을 위함 
        if(count >= length) break;
    }
    if(groupNumberArray.length <= 1) return 0;
    groupNumberArray.sort((a,b)=>b-a);    
    return groupNumberArray[0] * groupNumberArray[1];
}

// 첫 원소의 인덱스를 1로 시작해버리니 계산 복잡
// 원본 데이터를 unshift해서 인덱스를 ㄹㅇ 1로 만듦 - 한번 하는거라 시간 복잡도 ㄱㅊ을듯
// 또한 for문 끝까지 돌되 이미 멤버를 다 거쳤으면 break 하도록 
// visited를 idx=0or1로 접근하도록 하여 시간복잡도 줄이도록 (배열 push가 아닌)
// while문이 로직 핵심 - 자신의 값을 다음의 index로 변환
// 또한 어떤 원소끼리 이어져있는지에 관심이 아닌 각 그룹의 멤버 수만 알면 되기 때문에
    // 원소를 push 하는 것이 아닌 visited로 어딘가에 속해있다 + 각 그룹 멤버수 count++만 했음 