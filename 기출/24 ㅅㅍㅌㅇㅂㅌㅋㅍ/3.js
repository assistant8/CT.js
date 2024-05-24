const str = '[1, 2] + [2, 3]';
// const str = '[1, 2] * [2, 3]';
// const str = '[1, 2] * 10';

const numbers = str.split(/[\+\-\*]/);
const operators = str.match(/[\+\-\*]/g);

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
        answer = `${[son, mom]}`;
        console.log([son, mom])
    } else {
        const gcd = GCD(son, mom);
        console.log([son/GCD, mom/GCD])
    }
}

console.log('[' + answer.toString() + ']');

function GCD(a,b) {
    if(b===0) return a;
    else return Math.abs(GCD(b,a%b));
}