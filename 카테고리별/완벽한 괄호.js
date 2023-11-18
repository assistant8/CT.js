function isValidParentheses(s) {
    const stack = [];
    const parenthesesMap = { '(': ')', '[': ']', '{': '}' };
  
    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
  
      if (parenthesesMap[currentChar]) {
        // 열린 괄호인 경우 스택에 push
        stack.push(currentChar);
      } else {
        // 닫힌 괄호인 경우
        if (!stack.length || parenthesesMap[stack.pop()] !== currentChar) {
          // 스택이 비어있거나 짝이 맞지 않으면 false 반환
          return false;
        }
      }
    }
  
    // 모든 괄호가 올바르게 닫혔는지 확인
    return stack.length === 0;
  }

  function main(str) {
    const parenthesesMap = { '(': ')', '[': ']', '{': '}' };
    // 괄호 개수가 홀수이면 
    
  }
  
  // 테스트
  console.log(isValidParentheses("([[]])"));  // true
  console.log(isValidParentheses("([[])]"));  // false
  console.log(isValidParentheses("{([()]))}"));  // false
  console.log(isValidParentheses("{([()]())}"));  // true
  console.log(isValidParentheses("({([()]))}"));  // false