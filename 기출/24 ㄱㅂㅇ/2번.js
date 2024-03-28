// // function parseValue(value) {
// //     const sets = [];
// //     const operations = [];

// //     let currentSet = new Set();
// //     let currentOperation = '';

// //     for (let char of value) {
// //       if (char === '{') {
// //         currentSet = new Set();
// //       } else if (char === '}') {
// //         sets.push(currentSet);
// //       } else if (['+', '-', '*', '/'].includes(char)) {
// //         operations.push(char);
// //       } else if (char !== ',' && char !== '(' && char !== ')') {
// //         currentSet.add(char);
// //       }
// //     }
// //     console.log(sets, operations)

// //     return { sets, operations };
// //   }

// //   function union(setA, setB) {
// //     let resultSet = new Set(setA);
// //     for (let elem of setB) {
// //       resultSet.add(elem);
// //     }
// //     return resultSet;
// //   }

// //   function difference(setA, setB) {
// //     let resultSet = new Set(setA);
// //     for (let elem of setB) {
// //       resultSet.delete(elem);
// //     }
// //     return resultSet;
// //   }

// //   function intersection(setA, setB) {
// //     let resultSet = new Set();
// //     for (let elem of setA) {
// //       if (setB.has(elem)) {
// //         resultSet.add(elem);
// //       }
// //     }
// //     return resultSet;
// //   }

// //   function symmetricDifference(setA, setB) {
// //     const diffA = difference(setA, setB);
// //     const diffB = difference(setB, setA);
// //     return union(diffA, diffB);
// //   }

// //   function performOperation(sets, operations) {
// //     let result = sets[0];

// //     for (let i = 1; i < sets.length; i++) {
// //       let currentSet = sets[i];
// //       let operator = operations[i - 1];

// //       if (operator === '+') {
// //         result = union(result, currentSet);
// //       } else if (operator === '-') {
// //         result = difference(result, currentSet);
// //       } else if (operator === '*') {
// //         result = intersection(result, currentSet);
// //       } else if (operator === '/') {
// //         result = symmetricDifference(result, currentSet);
// //       }
// //     }

// //     return result;
// //   }

// //   function solution(value) {
// //     const { sets, operations } = parseValue(value);
// //     const result = performOperation(sets, operations);
// //     return Array.from(result).sort(); // 정렬된 배열 형태로 반환
// //   }

// //   // 예제 값
// //   const value = "{a,b,c}+{a,c,e,f}-{c,d,e}*({a,b,c}/{a,b,e,g}+{a})";

// //   // 결과 출력
// //   console.log(solution(value));

function parseValue(value) {
    const sets = [];
    const operations = [];

    let currentSet = new Set();
    let currentOperation = '';
    let inBrackets = false;

    for (let char of value) {
      if (char === '(') {
        inBrackets = true;
        currentSet = new Set();
      } else if (char === ')') {
        inBrackets = false;
        sets.push(currentSet);
      } else if (char !== ',' && !inBrackets) {
        if (['+', '-', '*', '/'].includes(char)) {
          operations.push(char);
        } else if (char !== '{' && char !== '}') {
          currentSet.add(char);
        }
      }
    }
    console.log(sets, operations)

    return { sets, operations };
  }

  function union(setA, setB) {
    let resultSet = new Set(setA);
    for (let elem of setB) {
      resultSet.add(elem);
    }
    return resultSet;
  }

  function difference(setA, setB) {
    let resultSet = new Set(setA);
    for (let elem of setB) {
      resultSet.delete(elem);
    }
    return resultSet;
  }

  function intersection(setA, setB) {
    let resultSet = new Set();
    for (let elem of setA) {
      if (setB.has(elem)) {
        resultSet.add(elem);
      }
    }
    return resultSet;
  }

  function symmetricDifference(setA, setB) {
    const diffA = difference(setA, setB);
    const diffB = difference(setB, setA);
    return union(diffA, diffB);
  }

  function performOperation(sets, operations) {
    let result = sets[0];

    for (let i = 1; i < sets.length; i++) {
      let currentSet = sets[i];
      let operator = operations[i - 1];

      if (operator === '+') {
        result = union(result, currentSet);
      } else if (operator === '-') {
        result = difference(result, currentSet);
      } else if (operator === '*') {
        result = intersection(result, currentSet);
      } else if (operator === '/') {
        result = symmetricDifference(result, currentSet);
      }
    }

    return result;
  }

  function solution(value) {
    const { sets, operations } = parseValue(value);
    const result = performOperation(sets, operations);
    return Array.from(result).sort(); // 정렬된 배열 형태로 반환
  }

  // 예제 값
  const value = "{a,b,c}+{a,c,e,f}-{c,d,e}*({a,b,c}/{a,b,e,g}+{a})";

  // 결과 출력
  console.log(solution(value));
