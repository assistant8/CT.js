// 테케 다맞았는데 효율성 0점
// function solution(people, limit) {
//     var answer = 0;
//     people.sort((a,b)=>a-b);
    
//     for(let i=0; i<people.length; i++) {
//         if(people.length === 1){ //원소 하나면 1 추가 후 종료
//             answer++;
//             return answer;
//         }

//         for(let k=i+1; k<people.length; k++) { //2명 이상 있을 때
//             if(people[i]+people[i+1] > limit) { //바로 다음꺼와 합이 초과면 i만 삭제
//                 people.shift()
//                 i--;
//                 break;
//             }

//             else if(people[i]+people[k] > limit) { //k 돌다가 합이 limit 넘으면
//                 people.splice(k-1,1) //이전꺼가 최대였으니 k-1 삭제
//                 people.shift() //i와 함께
//                 i--;
//                 break;
//             }
//         }
//         answer++;
//     }
    
//     return answer;
// }

function solution(people, limit) {
    people.sort((a,b) => a-b); // 배열을 오름차순으로 정렬
    let answer = 0;
    let left = 0; //왼 끝
    let right = people.length - 1; //오른 끝
    
    // lr 사이에서 벗어나면 탈출했다는 의미
    while (left <= right) { // 양쪽 끝에서부터 중간으로 이동, 
        if (people[left] + people[right] <= limit) { //두 포인터가 합승가능하면 l r 둘다 조임
            left++;
        }
        right--; //두 포인터 합승 불가 시 r만 조임
        answer++; //한 보트 나감
    }
    return answer;
}

console.log(solution([20,30,60,80,90], 100))