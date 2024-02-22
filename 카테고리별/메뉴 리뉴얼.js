function solution(orders, course) {
    var answer = [];
    for(let i=0; i<course.length; i++) {
        const num = course[i];
        const strMap = new Map(); // course 수마다 새로운 맵 
        for(let k=0; k<orders.length; k++) { // 각 문자열 하나씩 
            const combi = getCombination(orders[k], num); //콤비 배열 
            for(let j=0; j<combi.length; j++) {
                let str = combi[j];
                if(strMap.has(str)) strMap.set(str, strMap.get(str) + 1);
                else strMap.set(str, 1); 
            }
        }
        // console.log(strMap)
        let maxValue = -Infinity;
        let maxKey = [];
        for(const [key, value] of strMap) {
            if(value > maxValue) {
                maxValue = value;
                maxKey = [key];
            } else if(value == maxValue) {
                maxKey.push(key);
            }
        }
        // console.log(maxKey);
        if(maxValue!==1) answer.push(...maxKey); //2개 이상만 취급
    }
    answer.sort();
    return answer;
}

function getCombination(origin, m) {
    const n = origin.length;
    const seq = new Array(m).fill(0);
    const visited = new Array(n).fill(0);
    let result = [];

    function dfs(k, idx) {
        if(k===m) {
            const arr = seq.slice();
            result.push(arr);
            return result;
        }
        for(let i=idx; i<n; i++) {
            if(visited[i]===1) continue;
            seq[k]=i;
            visited[i]=1;
            dfs(k+1, i);
            visited[i]=0;
        }
    }
    dfs(0,0);
    
    result = result.map(e => e.map(ee=>origin[ee]).sort().join("")); // [[0,1], [3,2]] 이런 식 => [ab,bd] 이런 식으로 
    return result;
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]));
// console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5]));
// console.log(solution(["XYZ", "XWY", "WXA"], [2,3,4]));



// course 안에서 각 2, 3, 4
// orders 모두를 돌고 하나 원소 당 문자열개수C2를 함
// 각 콤비를 map에 넣음 - 없으면 1, 잇으면 +1
// 모든 orders 끝나면 map 종합하여 가장 value 큰 문자열 answer push - 공동 시 모두 

// 영어 string은 sort()로만 정렬 해결 
