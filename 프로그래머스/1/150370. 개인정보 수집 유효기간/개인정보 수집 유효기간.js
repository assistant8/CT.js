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