// 1번째 푼, 돌고돌아 푼
function solution(clothes) {
    var answer = 1;
    const map = new Map()
    var arr = []
    for(var i=0; i<clothes.length; i++) {
        arr.push(clothes[i][1])
    }
    const set = new Set(arr)
    
    var arr2 = Array.from(set)
    var obj = {};

    arr2.forEach((e)=>{
        obj[e] = 0
    })

    // for(var i=0; i<arr2.length; i++) {
    //     obj[arr2[i]]=0
    // }

    for(var i=0; i<clothes.length; i++) {
        obj[clothes[i][1]]++;
    }
    
    for(let key in obj) {
        answer *= (obj[key]+1)
    }
    
    console.log(obj)
    return answer-1;
}

solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]) //	5


// 2번째 푼, 필요한 것만 추출해서 obj로 만들고 푼
function solution(clothes) {
    var answer = 1;
    const obj = {};
    
    for(var i=0; i<clothes.length; i++) {
        obj[clothes[i][1]] = 0;
    }
    
    for(var i=0; i<clothes.length; i++) {
        obj[clothes[i][1]]++;
    }

    for(let key in obj) {
        answer *= (obj[key]+1)
    }
    
    return answer-1;
}

// 다른사람 정석 풀이
function solution(clothes) {
    let answer = 1;
    const obj = {};
    for(let arr of clothes) {
        obj[arr[1]] = (obj[arr[1]] || 0) + 1;
    }

    for(let key in obj) {
        answer *= (obj[key]+1);
    }

    return answer - 1;
}