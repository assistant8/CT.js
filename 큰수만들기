function solution(number, k) {
    var arr1 = number.split('').map(e=>Number(e));
    var candi = [];
    var candiNum = arr1.length - k;
    console.log(arr1)
    
    function combination(comb, rests, output) {
        if(comb.length == candiNum) return output.push(comb)

        rests.forEach((e, index) => {
            const rest = rests.slice(index+1);
            combination([...comb, e], rest, output);
        })
    }

    combination([], arr1, candi);
    candi = candi.map(e=>Number(e.join('')))
    console.log(candi)
    candi.sort((a,b)=>b-a)
    
    return String(candi[0]);
}

console.log(solution("909090", 4))