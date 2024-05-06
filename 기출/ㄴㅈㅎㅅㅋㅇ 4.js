function solution(a, b, queries) {
    const aleng = a.length;
    const bleng = b.length;
    const arr = Array.from(Array(bleng), ()=>Array(aleng).fill(0));
    let updateB = [];
    const answer = [];
    
    for(let k=0; k<bleng.length; k++) { //b
        for(let j=0; j<aleng; j++) { //a
            const sum = b[k]+a[j];
            arr[k][j] = sum;
        }
    }
    
    for(let i=0; i<queries.length; i++) {
        const query = queries[i];
        if(query[0]===0) { //0, 업뎃
            b[query[1]] += query[2];
            updateB.push(query[1]);
        } else { //1, sum 카운트 
            let count = 0;
            const target = query[1];
            for(let k=0; k<updateB.length; k++) { //b
                for(let j=0; j<aleng; j++) { //a
                    if(b[updateB[k]]+a[j]===target) count++;
                }
            }
            answer.push(count);
        }
    }
    return answer;
}

//b만큼 합배열 만들기
//updateB = -1;
//일단 쿼리 만큼 반복
    //0나오면 b 업뎃 - 업뎃b 설정
    //1나오면 a*b 반복 - 업뎃한 b에 대한 a만 반복
        //answer.push(개수)