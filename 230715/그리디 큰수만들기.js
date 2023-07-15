//시간 초과
function solution(number, k) {
    var arr1 = number.split('').map(e=>Number(e)); //각 digit 하나가 원소가 되는 배열
    var candi = [];
    var candiNum = arr1.length - k; //배열 중 택할 원소 개수, 콤비 택할 개수
    
    function combination(comb, rests, output) { //모든 조합 다 구해서 시간 초과
        if(comb.length == candiNum) return output.push(comb)

        rests.forEach((e, index) => {
            const rest = rests.slice(index+1);
            combination([...comb, e], rest, output);
        })
    }
    combination([], arr1, candi); //candi에 구한 배열 후보 저장
    
    candi = candi.map(e=>Number(e.join('')))
    console.log(candi)
    candi.sort((a,b)=>b-a)
    
    return String(candi[0]);
}

function solution(number, k) {
    var stack = [];
    for (var i = 0; i < number.length; i++) { //모든 number를 stack에 넣어봄
        var num = number[i];
        //k(지워야될 개수) 남아있고, 스택 원소가 있고, 스택 가장 위가 현재 num보다 작으면
        while (k > 0 && stack.length > 0 && stack[stack.length-1] < num) { 
            stack.pop(); //이전꺼 삭제, 계속 반복(k남고, 이전께 작고)
            k--;
        }
        stack.push(num); //현재꺼 일단 무조건 in
    }
    while (k > 0) { //처리 완료 후 삭제 할당량 못채우면 그만큼 일의자리수부터 날림
        stack.pop();
        k--;
    }
    return stack.join(""); //스택 그대로
}
