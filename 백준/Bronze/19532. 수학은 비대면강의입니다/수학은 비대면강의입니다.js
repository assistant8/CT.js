const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a,b,c,d,e,f] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number)

outer: for(let x=-999; x<=999; x++) {
    inner: for(let y=-999; y<=999; y++) {
        if((x*a + y*b === c) && (x*d + y*e === f)) {
            console.log(x,y);
            break outer;
        }
    }
}