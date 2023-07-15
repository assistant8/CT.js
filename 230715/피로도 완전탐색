function solution(k, dungeons) {
    let max = -1 //여러 코스 다닌 결과 가장 많이 탐험한 던전 수 

    const permutation = (permu, rests, output) => { //nPn 구하는 함수
        if (rests.length == 0) {
            return output.push(permu);
        }
        rests.forEach((e, idx) => {
            const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
            permutation([...permu, e], rest, output);
        });
    };

    const output = []
    permutation([], dungeons, output) //같은 길이의 던전의 모든 순열을 output으로 push

    output.forEach(e=>{ //모든 코스로 eachcourse 돌려봄 
        let count = eachCourse(e, k)
        if(max < count) max = count; //max 최신화
    })

    return max;
}

function eachCourse(course, remain) {
    let dcount = 0; //각 코스마다의 던전 카운트
    for(let i=0; i<course.length; i++){
        if(remain < course[i][0]) break; //이번 던전 최소 필요 > remain 이면 나가
        //출발
        remain -= course[i][1] //remain에서 이번 던전 파워 차감
        dcount++; //코스 중 한단계 통과할때마다 ++
    }

    return dcount; //몇단계 통과했는지
}

console.log(solution(80, [[80,20],[50,40],[30,10]]))