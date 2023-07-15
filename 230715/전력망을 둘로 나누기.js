function solution(n, wires) {
    var answer = 100; //100이 최대이므로
    const links = {}; //wire 연결에 대한 정보
    wires.forEach(e=>{ //각 노드마다 어떤 노드와 연결되어있는지
        const [a,b] = e;
        if(!links[a]) links[a] = [];
        if(!links[b]) links[b] = [];
        links[a].push(b);
        links[b].push(a);
    })

    //특정 노드를 루트로 하는 트리에서 exception 노드를 제외한 다른 노드와의 연결 개수
    function searchTree(root, exception) {
        let count = 0;
        const queue = [root]; 
        const visited = [];
        visited[root] = true;
        while(queue.length) {
            const cur = queue.pop();
            links[cur].forEach(next=>{
                if(next !== exception && !visited[next]){
                    visited[next] = true;
                    queue.push(next);
                }
            })
            count++;
        }
        return count;
    }

    //모든 wires 쌍마다 끊어서 왼쪽노드 개수, 오른쪽 노드 개수 구함, 그리고 그 차이의 최소치 구함
    wires.forEach((e,i)=>{
        const [a,b] = e;
        const diff = Math.abs(searchTree(a,b) - searchTree(b,a));
        answer = answer > diff ? diff : answer;
    })
    return answer;
}

console.log(solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]))

// console.log(a, b, searchTree(a,b), searchTree(b,a))
// 1 3 1 8 - 13 사이 끊었을 때 (1,3)은 1쪽에 있는 원소 개수 1 반환 / (3,1)은 8 반환
// 2 3 1 8
// 3 4 3 6
// 4 5 8 1
// 4 6 8 1
// 4 7 6 3
// 7 8 8 1
// 7 9 8 1

// searchTree 함수를 정의합니다. 이 함수는 두 개의 인자인 root와 exception을 받아서, root 노드를 루트로 하는 트리에서 exception 노드를 제외한 다른 노드와의 연결 개수를 반환합니다.

// 함수 내에서는 count 변수를 0으로 초기화하고, queue 배열을 [root]로 초기화합니다. visited 배열도 빈 배열로 초기화합니다. 그리고 while 반복문을 사용하여 queue 배열이 빌 때까지 아래 작업을 반복합니다.

// queue 배열에서 첫 번째 요소를 꺼내어 cur 변수에 저장합니다.
// links[cur] 배열을 forEach 메서드를 사용하여 반복하면서, 다음 요소를 next 변수에 저장합니다.
// next가 exception이 아니고, visited[next]가 false인 경우, visited[next]를 true로 설정하고, queue.push(next)를 실행합니다.
// count 변수를 1 증가시킵니다.