function solution(monsters, bullets) {
    const mMap = new Map();
    let count = 0;

    for(let i=0; i<monsters.length; i++) {
        const monster = monsters[i];
        const [dx, dy] = monster;
        const gcd = GCD(dx,dy);
        const xSlope = dx/gcd;
        const ySlope = dy/gcd;
        const mKey = `${xSlope}, ${ySlope}`;

        if(!mMap.has(mKey)) {
            mMap.set(mKey,0);
        }
        mMap.set(mKey, mMap.get(mKey)+1);
    }
    console.log(mMap)

    for(let i=0; i<bullets.length; i++) {
        const bullet = bullets[i];
        const [dx, dy] = bullet;
        const gcd = GCD(dx,dy);
        const xSlope = dx/gcd;
        const ySlope = dy/gcd;
        const mKey = `${xSlope}, ${ySlope}`;

        if(mMap.has(mKey) && mMap.get(mKey) > 0) {
            count++;
            mMap.set(mKey, mMap.get(mKey) - 1);
        }
    }
    console.log(mMap)

    return count===0 ? -1 : count;
}

function GCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

const monsters = [[-4, 4], [-2, 2], [6, 2], [0, -2]];
const bullets = [[3, 1], [-1, 1], [0, -4], [2, -3]]; //4

// [[2, 3], [4, 5], [3, -3], [2, -4], [3, -6], [-3, -3], [-5, 0], [-4, 4]], [[4, 1], [4, 6], [1, -2], [-4, -4], [-3, 0], [-4, 4]] //5
// [[1, 2], [-2, -1], [1, -2], [3, -1]], [[1, 0], [2, 1]] //-1


console.log(solution(monsters, bullets));


/////////////완탐버전 - 시간초과
function solution2(monsters, bullets) {
    let count = 0;
    const visited = Array(monsters.length).fill(0);

    for (let bullet of bullets) {
        const [dx, dy] = bullet; 
        const bgcd = GCD(dx, dy);
        const bslope = [dx/bgcd, dy/bgcd];

        for (let k=0; k<monsters.length; k++) {
            if(visited[k]) continue;
            const [mx, my] = monsters[k]; 
            const mgcd = GCD(mx, my);
            const mslope = [mx/mgcd, my/mgcd];
            if(bslope[0]===mslope[0] && bslope[1]===mslope[1]) {
                count++;
                visited[k]++;
                break;
            }
        }
    }

    return count===0 ? -1 : count;
}
