function solution(brown, yellow) {
    const X = brown+yellow;
    const temp = []; //divisor에 중복 push 방지 위해 약수 넣는 일차원 배열
    const divisor = [];
    let exitFlag = false;
    for(let i=2; i<X; i++){
        if(X%i===0) { //약수 i 발견
            if(temp.some(e=>{ //(temp에 i가 있음) 이미 앞에서 짝지어진 약수라면 break
                if(e===i) {
                    exitFlag = true; //for문 나가기 위함
                    return true; //some문 나감
                }
            })) 
            if(exitFlag) break; //약수 찾는 for문 탈출
            
            const a = X/i //i와 함께 X를 이루는 약수
            divisor.push([i,a])
            temp.push(i) //i a 모두 등록
            temp.push(a)
        }
    }

    const result = divisor.find((e,i)=>{ //후보 divisor 중 두번째 조건 맞는지 선별
        if((e[0]-2)*(e[1]-2)===yellow) return true;
    })

    if(result) return [result[1], result[0]] //가로가 더 크다했으니

}

console.log(solution(16,8))
