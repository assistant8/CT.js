function solution(numbers) {
  var answer = 0;
  const numArr = numbers.split("").map((e) => Number(e)); //배열에 각 number 원소로
  const output = [];

  const permutation = (permu, rests, output, i) => { //nPm 에서 각 m에 대한 값 나옴
    if (rests.length == i) {
      return output.push(permu);
    }
    rests.forEach((e, idx) => {
      const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
      permutation([...permu, e], rest, output, i);
    });
  };

  for (let i = 0; i < numArr.length; i++) { //nPm, i=m으로 nP1 nP2 ... 반복 
    permutation([], numArr, output, i); //output에 모든 경우의 수 담김
  }

  const set = new Set(output.filter((e) => e[0] !== 0).map(e=>Number(e.join('')))) 
  //output 중 0으로 시작(의미 없는 숫자) 제외, 각 배열에 있는 한자리 수 합쳐서 숫자 만듦, set으로 중복 제거

  const arr = Array.from(set) //set -> arr
  arr.forEach(e=>{ //arr 원소마다 소수 검사 
    if(isPrime(e)) answer++;
  })

  return answer;
}

function isPrime(num) {
    if(num===2||num===3) return true //소수는 2,3은 우선 걸러내자
    for(var i=2; i<=num; i++){
        if(num%i === 0){ //중간에 나눠지니 소수 아님 
            return false
        }             
        else if(i === num-1) { //마지막까지 안나눠지니 소수
            return true
        }
    }
}


console.log("답 " + solution("143"))

//for(var i=2; i<Math.floor(num/2); i++) 소수에서 이거 왜 안되는지.. 모르겠음 