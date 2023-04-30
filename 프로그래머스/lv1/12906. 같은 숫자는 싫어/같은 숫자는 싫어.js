function solution(arr)
{
    var answer = [];
    
    for(var i=0; i<arr.length; i++) {
        if(arr[i-1] != arr[i])
            answer.push(arr[i])
    }
    // arr.map((e) => {
    //     if(!answer.includes(e)) 
    //         answer.push(e)
    // })
    
    return answer;
}