//2진수 변환해서 계산안해줘도 되는 풀이 
function solution(n, arr1, arr2) {
    var answer = [];
    var arr3 = []
    
    for(var i=0; i<n; i++) {
        arr3[i] = arr1[i] | arr2[i]
        var temp = (arr3[i].toString(2))
        temp = temp.padStart(n, '0')
        for(var k=0; k<n; k++) {            
            temp = temp.replace('1', '#')
            temp = temp.replace('0', ' ')
        }        
        answer[i] = temp
    }
    return answer;
}

function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i=0; i<n; i++) {
        let num1 = arr1[i].toString(2); //01001
        let num2 = arr2[i].toString(2);
        num1 = num1.padStart(n, 0)
        num2 = num2.padStart(n, 0)
        let num3 = '';
        for(let k=0; k<n; k++) {
            if(num1[k]=='1' || num2[k]=='1') num3+='1'
            else num3+='0'
        }
        num3 = num3.replaceAll("1", "#")
        num3 = num3.replaceAll("0", " ")
        answer.push(num3)
    }

    return answer;
}