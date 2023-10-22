function solution(maps) {
    const needVisit = [[0,0]];
    const x = [0, 0, -1, 1];
    const y = [1, -1, 0, 0];
    const N = maps.length;
    const M = maps[0].length;
    
    while(needVisit.length!==0) {
        const [p,q] = needVisit.shift();
        if(p===N-1 && q===M-1) return maps[p][q];
        
        for(let i=0; i<4; i++) {
            const X = p+x[i];
            const Y = q+y[i];
            if(X>-1 && Y>-1 && X<N && Y<M) {
                if(maps[X][Y]===1) { //갈 수 있고, 아직 가지 않은 길이면 
                    needVisit.push([X,Y]);
                    maps[X][Y] = maps[p][q]+1;
                }
            }
        }
        // console.log(maps)
    }
    
    return -1;
    
}
