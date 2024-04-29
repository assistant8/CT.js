// num 이하의 수 중 소수 개수
function isPrime(num) {
	let arr = Array(num + 1).fill(true);
    //index 0이 존재하므로 배열을 num + 1로 만든다.

    arr[0] = false;
    arr[1] = false;
    //배열의 index 0과 1은 소수가 아니므로 false로 만든다.

    for(let i = 2; i * i <= num; i++) { //제곱근까지만 반복
        // console.log("\ni",i)
        if(arr[i]) { //4같은 경우 2의 배수이므로 4반복문은 돌지 않음
            for(let j = i * i; j <= num; j += i) {
                // console.log("jjjj",j)
                arr[j] = false; //배수이므로 소수가 아닌것으로 만든다.
            }
        }
    }
    console.log(arr)
    return arr.filter(el => el).length //filter로 arr중 값이 true인 것의 개수를 구한다.
}

console.log(isPrime(20))

// arr 배열 순회로 소수 구할 수도 있음

// 처음엔 다 true로 두고 4 6 8, 9 12 15, 16 20 이렇게 2,3,4~ 의 배수를 false 처리하여 걸러냄
// j 반복을 i * i 부터 시작하는 것은 그 이전의 값은 j이전의 수에서 이미 확인했기 때문