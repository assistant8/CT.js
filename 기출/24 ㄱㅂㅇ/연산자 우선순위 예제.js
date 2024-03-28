function calculate3(expression) {
  const operators = [];
  const operands = [];

  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  const evaluateOperation = () => {
    const operator = operators.pop();
    const operand2 = operands.pop();
    const operand1 = operands.pop();
    
    let result;
    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
    }
    operands.push(result);
  };

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (char === "(") {
      operators.push(char);
    } else if (char === ")") {
      while (operators[operators.length - 1] !== "(") {
        evaluateOperation();
      }
      operators.pop(); // remove '('
    } else if (char in precedence) {
      while (
        operators.length > 0 &&
        precedence[char] <= precedence[operators[operators.length - 1]]
      ) {
        evaluateOperation();
      }
      operators.push(char);
    } else { // operand
      let num = "";
      while (
        i < expression.length &&
        !isNaN(parseFloat(expression[i])) &&
        isFinite(expression[i])
      ) {
        num += expression[i];
        i++;
      }
      i--;
      operands.push(parseFloat(num));
    }
  }

  while (operators.length > 0) {
    evaluateOperation();
  }

  return operands[0];
}

const expression3 = "2*3+15-(10-1*9)";
const result3 = calculate3(expression3);
console.log(result3);
