function solution(answers) {
    var sol = [];
    const person = [];
    person[0] = [1,2,3,4,5];
    person[1] = [2,1,2,3,2,4,2,5];
    person[2] = [3,3,1,1,2,2,4,4,5,5];
    const p = [];
    p[0] = []
    p[1] = []
    p[2] = []
    var sum = []
    
    for(let i=0; i<3; i++) { //각 person 마다
        sum[i] = 0;
        if(person[i].length<answers.length) {
            //answer가 person보다 긴 경우 person을 answer 길이 이상으로 중복시킴
            for(let k=0; k<=answers.length; k=k+person[i].length) { //person[i] 길이만큼 띄움
                p[i].push(...person[i])
            }
            person[i] = JSON.parse(JSON.stringify(p[i])); //깊은 복사
        }
        
        for(let k=0; k<answers.length; k++) { //answer와 person[i] 비교 후 같으면 sum++
            if(answers[k]===person[i][k]) sum[i]++
        } 
    }
    
    const max = Math.max(...sum)
    for(let i=0; i<3; i++) { //sum 중 최대 가르기
        if(max===sum[i]) sol.push(i+1)
    }
    return sol;
}

console.log(solution([1,1,1,1,1,1,1,1,1]))