let candidate = [[1,2], [3,2], [1,4], [1,1]]

function sort1() {
    let up = 20;
    let left = 20;
    let target = [];
    for(let i=0; i<candidate.length; i++) {
        const [x, y] = candidate[i];
        if(x === up) {
            if(y < left) {
                left = y;
                target = candidate[i];
            }
        }
        if(x < up) {
            up = x;
            left = y;
            target = candidate[i];
        }
    }
    console.log(target)
}

function sort2() {
    candidate.sort((a,b)=>{
        if(a[0]===b[0]) return a[1] - b[1];
        return a[0]-b[0]
    });
    console.log(candidate[0])
}

sort1();
sort2();