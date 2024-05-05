function solution(location, s, e) {
    const [xs, ys] = s;
    const [xe, ye] = e;
    let xstart, xend, ystart, yend;
    const leng = location.length;
    if(xs < xe) {
        xstart = xs;
        xend = xe;
    } else {
        xstart = xe;
        xend = xs;
    }
    if(ys < ye) {
        ystart = ys;
        yend = ye;
    } else {
        ystart = ye;
        yend = ys;
    }

    let count = 0;
    for(let i=0; i<leng; i++) {
        const [nodex, nodey] = location[i];
        if(nodex >= xstart && nodex <= xend && nodey >= ystart && nodey <= yend) {
            count++;
        }
    }
    
    return count;
}

//[[0, 3], [1, 1], [1, 5], [2, 2], [3, 3], [4, 0]], [1, 4], [4, 1]
//[[0, 3], [1, 1], [1, 5], [2, 2], [3, 3], [4, 0]], [3, 4], [0, 0]
