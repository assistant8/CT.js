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
    if(b===0) return a;
    else return Math.abs(GCD(b,a%b));
}

const monsters = [[-4, 4], [-2, 2], [6, 2], [0, -2]];
const bullets = [[3, 1], [-1, 1], [0, -4], [2, -3]]; //4