function solution(n, k) {
    var answer = 0;
    const str = n.toString(k);
    const arr = str.split("0");
    console.log(arr)
    for(let i=0; i<arr.length; i++) {
        const number = Number(arr[i])
        console.log(isPrime(number))
        if(isPrime(number)) answer++;
    }
    return answer;
}

function isPrime(num) {
    if(num < 2 || typeof(num)!=='number') return false;
    for(let k=2; k<=Math.sqrt(num); k++) {
        if(num%k === 0) return false;
    }
    return true;
}

