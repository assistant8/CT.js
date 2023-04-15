// function solution(number, k) {
//     var arr1 = number.split('').map(e=>Number(e)); //각 digit 하나가 원소가 되는 배열
//     var candi = [];
//     var candiNum = arr1.length - k; //배열 중 택할 원소 개수, 콤비 택할 개수
    
//     function combination(comb, rests, output) { //모든 조합 다 구해서 시간 초과
//         if(comb.length == candiNum) return output.push(comb)

//         rests.forEach((e, index) => {
//             const rest = rests.slice(index+1);
//             combination([...comb, e], rest, output);
//         })
//     }
//     combination([], arr1, candi); //candi에 구한 배열 후보 저장
    
//     candi = candi.map(e=>Number(e.join('')))
//     console.log(candi)
//     candi.sort((a,b)=>b-a)
    
//     return String(candi[0]);
// }

function solution(number, k) {
    var stack = [];
    for (var i = 0; i < number.length; i++) {
        var num = number[i];
        while (k > 0 && stack.length > 0 && stack[stack.length-1] < num) {
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    while (k > 0) {
        stack.pop();
        k--;
    }
    return stack.join("");
}