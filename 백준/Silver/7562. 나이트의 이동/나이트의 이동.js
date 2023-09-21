const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [testN, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n")
testN=Number(testN);
rest = rest.map(e=>e.split(" ").map(Number))

for(let i=0; i<rest.length; i=i+3) {
    const arr = [];
    for(let k=0; k<3; k++) {
        arr.push(rest[i+k])
    }
    console.log(BFS(arr));
}

function BFS(array) {
    const [[I], first, last] = array;
    const graph = Array.from(Array(Number(I)), ()=>Array(Number(I)).fill(0));
    const needVisit = [[first, 0]];

    while(needVisit.length!==0) {
        // console.log("needVisit", needVisit)

        const [[p,q], depth] = needVisit.shift();
        if(p===last[0] && q===last[1]) return depth //이건 여기에, push 할때 두면 예외가 있을 수도(틀림)
        const X = [-2, -2, -1, -1, 1, 1, 2, 2];
        const Y = [1, -1, 2, -2, 2, -2, 1, -1];

            for(let j=0; j<8; j++) {
                const x = p + X[j];
                const y = q + Y[j];
                if(x>-1 && x<I && y>-1 && y<I) {
                    if(graph[x][y]===0) {
                        needVisit.push([[x, y], depth+1]);
                        graph[x][y]++;
                    }
                }
            }
    }
}

//시간초과