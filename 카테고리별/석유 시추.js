function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const map = new Map();
    let idx = 0;
    
    for(let i=0; i<n; i++) {
        for(let k=0; k<m; k++) {
            if(land[i][k]===1) bfs(i, k);
        }
    }
    // console.log(map);

    const array = new Array(m).fill(0);

    for(let [key,value] of map) {
        const count = Number(key.split(",")[0]);
        const arr = [...value];
        for(let a=0; a<arr.length; a++) {
            const num = arr[a];
            array[num] += count;
        }
    }
    // console.log(array);
    
    function bfs(a,b) {
        const needVisit = [[a,b]];
        const dx = [0, 0, -1, 1];
        const dy = [1, -1, 0, 0];
        let count = 0;
        const arrayY = [];
        
        while(needVisit.length) {
            const [x,y] = needVisit.shift();
            land[x][y] = -1; //
            count++; //
            arrayY.push(y); //
            
            for(let i=0; i<4; i++) {
                const X = x+dx[i];
                const Y = y+dy[i];
                if(X>=0 && Y>=0 && X<n && Y<m && land[X][Y]===1) {
                    needVisit.push([X,Y]);
                    land[X][Y] = -1; //
                }
            }
        }
        idx++;
        const key = `${count}, ${idx}`;
        const setY = new Set(arrayY);
        map.set(key, setY);
    }
    return Math.max(...array);
}

// 모든 곳 한번 훑어서 각 좌표 당 얼만큼의 공간의 그룹에 연결되어있는지 map으로 기록 후 합산하는 방법 
// visit 시 -1
// 그룹 : 좌표 

// -1 처리, count 처리, push 처리를 for문에서만 해주니 첫 시작 좌표는 처릴 못해줌
// 그래서 needvisit에서 꺼낸 후 해도 상관없을 것 같아서 해줬더니 count 오버남 
    // visited인 -1 처리만 아래에도 해줌 (오버카운팅 방지)
    // 이유는, 위에서 꺼내지기 전까지 아래 for문에서 여러번 처리가 되는 경우가 있음 - 아래에서 먼저 needVisit에 넣어주고, 그리고 위에서 꺼내는 형식이므로
// 다른 문제와 달리 첫 시작 좌표도 동일하게 취급해야하므로, 처음에 시작 좌표만 따로 처리하고 시작해도 무방 

// 일단 모든 좌표에서 bfs를 해보고 행마다 max를 구해보자 => n^2 * n = n^3 이라 시간초과 

const land = [[0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 1, 1]];
const land2 = [[1, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]]
console.log(solution(land));
console.log()
console.log(solution(land2));