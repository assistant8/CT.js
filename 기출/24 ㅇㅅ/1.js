function solution(arrA, arrB) {
    const leng = arrA.length;
    if(leng !== arrB.length) return false;
    for(let i=0; i<leng; i++) {
        const first = arrA.shift();
        arrA.push(first);
        if(compare(arrA, arrB, leng)) return true;
    }
    return false;
}

function compare(arr1, arr2, leng) {
    for(let k=0; k<leng; k++) {
        if(arr1[k]!==arr2[k]) return false;
    }
    return true;
}

// [7, 8, 10], [10, 7, 8]
// [4, 3, 2, 1], [5, 4, 1, 2]
