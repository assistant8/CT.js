// const str = '[1, 2] + [3, 6]';
const str = '[1, 2] + [2, 3]';
// const str = '[1, 2] * [2, 3]';
// const str = '[1, 2] * 10';

const numbers = str.split(/[\+\-\*\/]/); // +,-,*로 split해서 배열 뽑아내기 
const operators = str.match(/[\+\-\*\/]/g); //+-* 뽑아내기

console.log(numbers);
console.log(operators);
let answer;

if(operators[0]==="+") {
    const [first, second] = numbers;
    const [son1, mom1] = first.match(/[0-9]+/g).map(Number);
    const [son2, mom2] = second.match(/[0-9]+/g).map(Number);
    const mom = mom1*mom2;
    const son = mom2*son1 + mom1*son2;
    console.log(son%mom)
    if(son%mom) {
        answer = [son, mom];
    } else {
        const gcd = GCD(son, mom);
        answer = [son/gcd, mom/gcd];
    }
}

console.log(answer)
console.log('[' + answer.toString() + ']');

function GCD(a,b) {
    if(b===0) return a;
    else return Math.abs(GCD(b,a%b));
}

//answer.toString()은 배열 answer를 문자열로 변환합니다. 배열 [7, 6]은 문자열 "7,6"으로 변환됩니다.
    //배열의 각 요소를 쉼표로 구분한 문자열을 반환합니다.   
//Json.stringify는 아예 형태 그대로 문자열 반환 
const array1 = [[2,3], [4,5]];
console.log(array1.toString()) //2,3,4,5
console.log(JSON.stringify(array1)) //[[2,3],[4,5]]

//주어진 문자열이 JSON 형식과 일치하지 않으면 JSON.parse() 함수는 SyntaxError
const jsonString = "[[2,3], [4,5]]";
const array = JSON.parse(jsonString);
console.log(array); // [[2,3], [4,5]]

//numbers = [ '[1, 2] ', ' [2, 3]' ] 여기서 1,2를 뽑아내려면
const [first, second] = numbers;
const [son1, mom1] = first.match(/[0-9]+/g).map(Number);

//약분은 gcd를 이용한다 