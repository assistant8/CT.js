function solution(lottos, win_nums) {
    var answer = [];
    let count = 0;
    let zero = 0;
    const prize = new Map([
        [6,1],
        [5,2],
        [4,3],
        [3,4],
        [2,5],
        [1,6],
        [0,6]
    ]);
    
    for(let i=0; i<6; i++) {
        if(lottos.includes(win_nums[i])) count++;
        if(lottos[i]===0) zero++;
    }
    
    answer[1] = prize.get(count);
    answer[0] = prize.get(count+zero)
    
    console.log(count, zero)
    return answer;
}

// 6개해서 winnum 하나씩해서 lotto에 includes 여부 체크 count
// 0 개수 count
// count와 등수 map 