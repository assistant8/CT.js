const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a,b,c,d,e,f] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number)

// // console.log(a,b,c,d,e,f);
// let A,B,C;
// let x,y;

// //a=d가 되도록 배수를 구함
// const multi = d/a;
// a = a*multi;
// b = b*multi;
// c = c*multi;
// // console.log("multi", multi)
// // console.log(a,b,c,d,e,f);

// //차감법?
// B = e-b;
// C = f-c;

// //y값을 구함
// y = C/B;

// //y값을 대입해서 x값 구함
// x = (c-(b*y))/a;

// console.log("x,y", x,y)

outer: for(let x=-999; x<=999; x++) {
    inner: for(let y=-999; y<=999; y++) {
        if((x*a + y*b === c) && (x*d + y*e === f)) {
            console.log(x,y);
            break outer;
        }
    }
}

//위 풀이는 ㄹㅇ 대입 등 실 방정식 푸는 로직대로 했는데 예외처리 안되어있는지 실패
//for문으로 범위 내 xy값 알아내는 완전탐색 방식으로 성공 