function solution(today, terms, privacies) {
    var answer = [];
    today = today.split(".").map(Number);
    console.log("today", today)
    const map = new Map();
    terms = terms.map(e=>e.split(" "))
    terms.forEach(e=>map.set(e[0], Number(e[1])))
    console.log("map", map)
    privacies = privacies.map(e=>{
        const element = e.split(" ");
        element[0] = element[0].split(".").map(Number)
        return element;
    })

    for(let i=0; i<privacies.length; i++) {
        const privacyDay = privacies[i][0]; //해당 i번째 날짜 
        console.log("privacyDay", privacyDay)
        const remainMonth = map.get(privacies[i][1])
        console.log("remainMonth", remainMonth)
        const monthSum = privacyDay[1]+remainMonth;
        if(monthSum%12===0) {
            privacyDay[1]=12;
            privacyDay[0] += (Math.floor(monthSum/12)-1);
        } else {
            privacyDay[0] += Math.floor(monthSum/12);
            privacyDay[1] = monthSum%12;
        }
        
        console.log(monthSum)
        console.log(privacyDay)
        console.log()
        
        if(!isOutDated(today, privacyDay)) answer.push(i+1)
    }
    return answer;
}

function isOutDated(today, limit) { //지났으면(오늘이 더 작으면) true
    if(today[0]<limit[0]) return true
    else if(today[0]>limit[0]) return false
    else {
        if(today[1]<limit[1]) return true
        else if(today[1]>limit[1]) return false
        else {
            if(today[2]<limit[2]) return true
            else if(today[2]>limit[2]) return false
            else return false //아예 동일 시 안지난거임 
        }
    }
}


///////////////////// 블로그 코드인데 봐볼만한 코드 몇 개 존재 
// function solution(today, terms, privacies) {
//     // 현재 날짜 [연, 월, 일]로 저장
//     let current = today.split(".").map(v => +v);
    
//     // 약관 종류가 {A: '6', B: '12'} 이런식으로 저장됨
//     let termsKind = {};
    
//     // 배열로 저장되어 있는 약관 정보를 알아보기 쉽게 하기 위해 termsKind라는 객체에 저장
//     terms.forEach(v => {
//         let [kind, period] = v.split(" ");
//         termsKind[kind] = period; 
//     })
    
//     // 파기해야하는 개인정보 인덱스를 저장 
//     let result = [];
    
//     // 개인정보들을 for문 돌리면서 현재 날짜를 비교해 파기해야할 정보를 result에 넣어준다
//     privacies.forEach((v,i) => {
//         // 구조식 분해로 past에는 개인정보 수집 일자, kind에는 약관 종류가 저장
//         let [past, kind] = v.split(" ");
//         // 마찬가지로 개인정보 수집 일자를 년, 월, 일로 숫자 변환 후 저장
//         let [y,m,d] = past.split(".").map(v => +v);
//         // 개인정보 수집 일자 달에 약관 종류에 맞는 유효 기간을 더함 
//         m+=+termsKind[kind];
//         // 보관 가능 날짜는 유효기간 하루 전날까지라서 하루를 빼줌
//         d--;
        
//         // 만약 달이 12보다 클 경우
//         if(m>12){
//             // 달을 12으로 나눴을 때
//             if(m % 12 === 0){
//                 // 12의 배수이면 년도는 바뀌지 않음
//                 y += parseInt(m/12) - 1;
//                 // 0이면 12월 
//                 m = 12;
//             }else{
//                 // 12의 배수가 아닌 경우는 년도가 바뀜
//                 y += parseInt(m/12);
//                 // 아닐경우 12로 나눈 나머지
//                 m = m % 12;
//             }
//         }
//         // d-- 해서 일자가 0이 된 경우
//         if(d === 0){
//             // 0일인 경우는 없으므로 전달로 넘어가기 위해
//             m--;
//             // 전달로 넘어가면 그 달의 마지막 일인 28로 저장
//             d=28;
//              // m-- 해서 달이 0이 된 경우
//             if(m === 0){
//                 // 0달인 경우는 없으므로 전년도로 넘어가기 위해
//                 y--;
//                 // 전년도로 넘어가면 그 해의 마지막 달인 경우 12로 저장
//                 m=12;
//             }
//         }
//         // 만약 유효기간의 년도보다 현재 년도가 클 경우
//         if(y < current[0]){
//             // 해당 개인정보 인덱스 값을 +1한 후 result에 저장
//             result.push(i+1);
//             return;
//         // 만약 년도가 같을 경우
//         }else if(y === current[0]){
//             // 유효기간의 달보다 현재의 달이 클 경우
//             if(m < current[1]){
//                 result.push(i+1);
//                 return;
//             // 먄약 달이 같을 경우
//             }else if(m === current[1]){
//                 // 유효기간의 일수보다 현재의 일수가 더 클경우
//                 if(d < current[2]){
//                     result.push(i+1);
//                     return;
//                 }
//             }
//         }
//     })
//     return result;
// }