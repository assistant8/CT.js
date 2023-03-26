function func1(s) {
    let arr = s.split("\n")
    let N;
    let A = [];
    let B = [];
    let result = 0;

    //값 할당
    for(let i=0; i<arr.length; i++) {
        if(i===0) {
            N = Number(arr[0])
        } else if(i===1) {
            A = arr[i].split(" ").map(e=>Number(e))
        } else {
            B = arr[i].split(" ").map(e=>Number(e))
        }
    } 

    //정렬
    A.sort((a,b) => a-b) //오름차순
    B.sort((a,b) => b-a) //내림차순
    
    //index 그대로 곱
    A.forEach((e,i)=>{
        result += e*B[i]
    })

    return result
}

console.log(func1("5\n1 1 1 6 0\n2 7 8 3 1"))