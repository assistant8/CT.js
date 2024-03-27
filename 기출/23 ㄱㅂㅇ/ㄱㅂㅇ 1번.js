function solution(n, cars, links) {
    const graph = {}; 
    links.map(w => { 
        const [a, b] = w;
        if(!graph[a]) graph[a] = [];
        if(!graph[b]) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    })
    
    const searchTree = (root, exception) => {
        let sum = cars[root-1];
        const queue = [root];
        const visited = [];
        visited[root] = true;
        while(queue.length){
            const cur = queue.pop();
            graph[cur].map(next => {
                if(next !== exception && !visited[next]){
                    visited[next] = true;
                    queue.push(next);
                    sum += cars[next-1];
                }
            })
        }
        return sum;
    }
    
    let answer = 100000000; 
    links.map((w, i) => { 
        const [a, b] = w;
        const dif = Math.abs(searchTree(a,b) - searchTree(b,a));
        answer = answer > dif ? dif : answer;
    })
    return answer;
}

let a = solution(6, [6,4,10,9,8,4], [[4,1],[3,2],[1,6],[3,5],[5,1]])
// let b = solution(4,	[[1,2],[2,3],[3,4]])

console.log(a)