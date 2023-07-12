function solution(operations) {
    var answer = [];
    var sorted = [];
    for (let i=0; i<operations.length; i++) {
        sorted.sort((a,b)=>a-b);
        if(operations[i]==="D -1") {
            sorted.shift();
        }
        else if(operations[i]==="D 1") {
            sorted.pop();
        }
        else {
            var insertNum = Number(operations[i].slice(2,operations[i].length));
            sorted.push(insertNum);
        }
    }
    sorted.sort((a,b)=>a-b);
    console.log("!", sorted)
    
    if(sorted.length === 0) return [0,0];
    // answer.push(sorted[(sorted.length)-1])
    return [sorted[(sorted.length)-1], sorted[0]];
}