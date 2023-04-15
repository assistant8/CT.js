// 구상은 됐지만 구현 막힘
function solution(n, costs) {
    var answer = 0;
    const map = new Map();
    let connect = [];
    let set = new Set();
    let rest = [];
    
    costs.forEach(e=>{ //map 형성
        const [a,b,c] = e;
        if(!map.get(a)) map.set(a, []) //처음 들어온 키 값이면 배열로 초기화
        map.get(a).push(b) //그 key에 두번째 원소 push
    })
    console.log(map)
    
    for (const [key, value] of map) { //rest 초기화 (모든 원소)
        rest.push(key);
    }
    
    connect.push(0)
    for(let i=0; i<n; i++) { //connect 하나 추가 사이클
        let min = 9999;
        for(k=0; k<connect.length; k++) { //connect 원소 하나하나마다
            if(min<map.get(connect[k])) {
                min = costs[connect[k]]
            }
        }
        if(connect.length === n) break;
    }
    
    
    return answer;
}

//블로그 
// https://eunchanee.tistory.com/608
const unionFind = (n, parent) => {
    if(parent[n] === n){
        return n;
    }
    
    return parent[n] = unionFind(parent[n], parent);
}

const solution = (n, costs) => {
    let answer = 0;
    
    const parent = Array(n).fill(0);
    
    for(let i = 0; i < n; i++){
        parent[i] = i;
    }
    
    costs.sort((a, b) => a[2] - b[2]);
    
    for(let i = 0; i < costs.length; i++){
        const start = unionFind(costs[i][0], parent);
        const end = unionFind(costs[i][1], parent);
        const cost = costs[i][2];
        
        if(start !== end){
            answer += cost;
            parent[start] = end;
        }
    }
    
    return answer;
}