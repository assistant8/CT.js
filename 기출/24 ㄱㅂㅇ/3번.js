function solution(N, PATH) {
    let place = [0, 0];
    for (let i = 0; i < PATH.length; i++) {
        let [a, b] = place;
        if (PATH[i] === "L") place = [a, b - 1];
        else if (PATH[i] === "R") place = [a, b + 1];
        else if (PATH[i] === "U") place = [a-1, b];
        else if (PATH[i] === "D") place = [a + 1, b];
        if (place[0] > N || place[1] > N || place[0] < 0 || place[1] < 0) return -1
    }
    if (place[0] === N && place[1] === N) return 0
    else {
        let [x, y] = place;
        let n = N - x + N - y;
        let r = N - x;
        return combi(n,r) % 1007
    }
}

function fact(n) {
    if (n === 0 || n === 1) return 1;
    return n * fact(n - 1);
}

function combi(n, r) {
    if (n === r) return 1;
    return fact(n) / (fact(n - r) * fact(r));
}

console.log(combi(33,19))