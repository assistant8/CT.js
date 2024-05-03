function solution(ability) {
    var answer = 0;
    const person = ability.length;
    const event = ability[0].length;
    const visited = Array(person).fill(0);
    const seq = Array(event).fill(0);
    const arr = []
    console.log(person, event)
    
    function dfs(k) {
        if(k===event) {
            const result = seq.slice();
            arr.push(result)
            return;
        }
        for(let i=0; i<person; i++) {
            if(visited[i]) continue;
            seq[k] = i;
            visited[i] = 1;
            dfs(k+1);
            visited[i] = 0;
        }
    }
    
    dfs(0);
    
    let max = 0;
    for(let i=0; i<arr.length; i++) {
        let sum = 0;
        for(let k=0; k<event; k++) { //k=0,1,2 -> a[value][k]
            const value = arr[i][k];
            sum += ability[value][k]
        }
        if(max < sum) max = sum;
    }
    return max;
}

//10P10, person P event - [1,5,4] 1~5사람 중 겹치지 않게 3 종목 