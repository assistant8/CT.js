function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i=0; i<n; i++) {
        let num1 = arr1[i].toString(2); //01001
        let num2 = arr2[i].toString(2);
        num1 = num1.padStart(n, 0)
        num2 = num2.padStart(n, 0)
        // num1.replace("0", " ")
        console.log(num1, num2)
        let num3 = '';
        for(let k=0; k<n; k++) {
            if(num1[k]=='1' || num2[k]=='1') num3+='1'
            else num3+='0'
        }
        console.log("num3", num3)
        num3 = num3.replaceAll("1", "#")
        num3 = num3.replaceAll("0", " ")
        answer.push(num3)
    }
    
    console.log("answer", answer)

    return answer;
}