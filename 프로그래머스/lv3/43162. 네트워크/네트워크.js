function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(0) //연결 되어있다는 뜻 (그랬으니 visit 되었겠지)
    
    function dfs(v) { //v는 [각 컴퓨터 하나]
        console.log(v)
        visited[v] = 1;
        for(let i=0; i<n; i++) {
            if(i===v) continue; //자기 idx는 의미없으니 pass
            if(computers[v][i] && !visited[i]){ //v 컴에서 1이 있는(연결된) 노드로 dfs +아직 안거친 노드여야
                dfs(i)
            }
        }
    }
    
    for(let i=0; i<n; i++) {
        if(visited[i]){
            console.log("continue : ", i)
            continue
        } 
        dfs(i)//vertex 수만큼, 각자가 최초노드로 dfs 돌림 
        answer++;
    }
    
    return answer;
}