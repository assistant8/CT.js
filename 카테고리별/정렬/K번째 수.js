function solution(array, commands) {
    var answer = [];
    
    for(var i=0; i<commands.length; i++) { //253에 대해
        const arr = array.slice(commands[i][0]-1, commands[i][1])
        arr.sort((a, b) => a - b)
        console.log(arr)
        answer.push(arr[commands[i][2]-1])
        
    }
    return answer;
}