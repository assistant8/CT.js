function solution(expression) {
    const result = [];
    const combinations = [
        ["+", "*", "-"],
        ["+", "-", "*"],
        ["*", "+", "-"],
        ["*", "-", "+"],
        ["-", "*", "+"],
        ["-", "+", "*"],
    ]; 
    
    function operate(a,b,o) {
        if(o==="-") return a-b;
        if(o==="+") return a+b;
        if(o==="*") return a*b;        
    }
    
    const originnumbers = expression.split(/[\+\-\*]/);
    const operatorsTemp = expression.split(/[0-9]+/g);
    const originoperators = operatorsTemp.slice(1,operatorsTemp.length-1);
    
    for(let i=0; i<6; i++) { //6개 중 하나의 콤비
        const combi = combinations[i];
        let numbers = originnumbers.map(Number).slice();
        let operators = originoperators.slice();
        
        for(let j=0; j<3; j++) { //연산자 우선순위 3개 중 어떤 연산 할지 
            const currentOperator = combi[j];
            for(let k=0; k<operators.length; k++) { //주어진 연산자 반복문
                if(operators[k]==currentOperator) {
                    const value = operate(numbers[k], numbers[k+1], operators[k]);
                    numbers[k] = value;
                    numbers.splice(k+1,1);
                    operators.splice(k,1);
                    k--;
                }
            }
        }
        result.push(Math.abs(numbers[0]));
    }
    console.log(result)
    return Math.max(...result);
}