function isValidParentheses(s) {
    const stack = [];
    const parenthesesMap = { '(': ')', '[': ']', '{': '}' };
  
    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
  
      if (parenthesesMap[currentChar]) { // 열린 괄호인 경우 스택에 push
        stack.push(currentChar);
      } else { // 닫힌 괄호인 경우
        if (!stack.length || parenthesesMap[stack.pop()] !== currentChar) { // 스택이 비어있거나 짝이 맞지 않으면 false 반환
          return currentChar;
        }
      }
    }
  
    // 모든 괄호가 올바르게 닫혔는지 확인
    if(stack.length===0) return true
    else return false
  }

  function getOdd(s) {
    const b = {
      '[': 0,
      '{': 0,
      '(': 0,
      ')': 0,
      '}': 0,
      ']': 0,
    };

    for(let i=0; i<s.length; i++) {
      const char = s[i];
      b[char]++;
    }
    
    const opening = ['[', '{', '('];
    const closing = [']', '}', ')'];

    for (const bracket of opening) {
      if (b[bracket] < b[closing[opening.indexOf(bracket)]]) {
        return bracket;
      }
    }
    for (const bracket of closing) {
      if (b[bracket] < b[opening[closing.indexOf(bracket)]]) {
        return bracket;
      }
    }
  }

  function main(str) {
    const target = getOdd(str);
    console.log(target)
    let count = 0;
    for(let i=0; i<str.length; i++) {
      const newStr = str.slice(0, i+1) + target + str.slice(i+1);
      if(isValidParentheses(newStr)===true) count++;
    }
    return count;
  }
  
  // // 테스트
  // console.log(isValidParentheses("[]([[]){}"));  // true
  // console.log(isValidParentheses("([[]])"));  // true
  // console.log(isValidParentheses("([[])]"));  // false
  // console.log(isValidParentheses("{([()]))}"));  // false
  // console.log(isValidParentheses("{([()]())}"));  // true
  // console.log(isValidParentheses("({([()]))}"));  // false

  console.log(main("[]([[]){}"))
  console.log(main("{([()]))}"))
  console.log(main("(()()()"))

  // function getOtherSide(char) {
  //   const parenthesesMap = { '(': ')', '[': ']', '{': '}' };

  //   if(parenthesesMap[char]) return parenthesesMap[char];
  //   else {
  //     for(const open in parenthesesMap) {
  //       if(parenthesesMap[open]===char) return open;
  //     }
  //   }
  // }