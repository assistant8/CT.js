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
    let left = 0;
    let right = people.length - 1;
    while (left <= right) { // 양쪽 끝에서부터 중간으로 이동하면서 최대한 많은 사람 태우기
        if (people[left] + people[right] <= limit) {
            left++;
        }
        right--;
        answer++;
    }
    return answer;
}