const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, numArray, operatorItemArray] = fs.readFileSync(filePath).toString().trim().split("\n")
numArray = numArray.split(" ").map(Number)
operatorItemArray = operatorItemArray.split(" ").map(Number)

//각 연산자 함수 불러서 브루트포스 하는 함수
function main() {
    const resultArray = [];
    const operatorItem = [];
    for(let i=0; i<4; i++) {
        for(let k=0; k< operatorItemArray[i]; k++) {
            operatorItem.push(i);
        }
    }
    // console.log("operatorItem", operatorItem)
    const operatorArray = getPermutationsWithoutRepetition(operatorItem);
    // console.log("operatorArr", operatorArray)

    //이제 메인 브루트포스 
    for(let i=0; i<operatorArray.length; i++) { //여러 연산자 경우의 수 
        let result = numArray[0];
        const operator = operatorArray[i];
        // console.log("operator", operator)

        for(let k=0; k<N; k++) { //각 경우 연산자 배열의 원소
            if(operator[k]===0) result = add(result, numArray[k+1]);
            else if(operator[k]===1) result = minus(result, numArray[k+1]);
            else if(operator[k]===2) result = multi(result, numArray[k+1]);
            else if (operator[k] === 3) {
                if (numArray[k + 1] === 0) {
                  result = 0; // 0으로 나누는 경우 0으로 설정
                } else {
                  result = divide(result, numArray[k + 1]);
                }
              }       
        }
        // console.log("result", result)
        resultArray.push(result);
    }
    // console.log("resultArray", resultArray)
    Math.max(...resultArray) === -0 ? console.log(Math.abs(Math.max(...resultArray))) : console.log(Math.max(...resultArray))
    Math.min(...resultArray) === -0 ? console.log(Math.abs(Math.min(...resultArray))) : console.log(Math.min(...resultArray))
}

main();

function getPermutationsWithoutRepetition(arr) {
    const permutations = [];
    const usedElements = new Array(arr.length).fill(false);
  
    function generatePermutations(currentPermutation) {
      if (currentPermutation.length === arr.length) {
        permutations.push([...currentPermutation]);
        return;
      }
  
      for (let i = 0; i < arr.length; i++) {
        if (usedElements[i] || (i > 0 && arr[i] === arr[i - 1] && !usedElements[i - 1])) {
          continue;
        }
  
        currentPermutation.push(arr[i]);
        usedElements[i] = true;
        generatePermutations(currentPermutation);
        currentPermutation.pop();
        usedElements[i] = false;
      }
    }
  
    arr.sort(); // 배열을 정렬하여 중복된 원소를 처리합니다.
    generatePermutations([]);
  
    return permutations;
  }

function add(a, b) {
    return a+b;
}

function minus(a, b) {
    return a-b;
}

function multi(a, b) {
    return a*b;
}

function divide(a, b) {
    if(a<0) {
        return -Math.floor((Math.abs(a)/b))
    }
    return Math.floor(a/b)
}

// [2, 0, 1, 0] => [0, 0, 2] 로 변환해서 순열로 만듦
// 같은 원소가 있는 배열에서 순열 만들기 
// 그래서 [002, 020, 200] 을 만들어서 각 숫자를 각 연산자로 대응시키고
// 모든 경우의 수 루프 돌림 

// 나눗셈이 특이한 방식이어서 마지막에 -0, 0 처리하여 완료 