function solution(fees, records) {
    var answer = [];
    const carSet = new Set();
    // const carObj = {};
    
    records = records.map(e=>{
        const result = e.split(" ");
        result[0] = result[0].split(":").map(Number);
        result[1] = Number(result[1]);
        carSet.add(result[1]);
        return result;
    })
    // console.log("records", records)
    
    const carArr = Array.from(carSet);
    
    carArr.sort((a,b)=>a-b);
    // console.log("carArr", carArr)
    const allCarArr = [];
    for(let i=0; i<carArr.length; i++) {
        const newArr = [];
        for(let k=0; k<records.length; k++) {
            if(carArr[i]===records[k][1]) {
                newArr.push(records[k])
            }
        }
        allCarArr.push(newArr)
    }
    // console.log("allCarArr", allCarArr)
    
    for(let i=0; i<allCarArr.length; i++) {
        const totalTime = calculateTimeEachCar(allCarArr[i]);
        const totalFee = calculateFee(fees, totalTime);
        answer.push(totalFee)
    }
    return answer;
}

function calculateFee(feeArr, totalTimes) {
    console.log("feeArr, totalTimes", feeArr, totalTimes)
    const [baseTime, baseFee, perTime, perFee] = feeArr;
    let result;
    if(totalTimes>baseTime) result = baseFee + Math.ceil((totalTimes-baseTime)/perTime)*perFee;
    else result = baseFee;
    console.log("totalFee", result)
    return result;
}

function calculateTimeEachCar(carArr) { //각 차의 배열을 통해 요금 리턴 
    console.log("carArr", carArr)
    let startTime, finishTime;
    let totalTime = 0;
    for(let i=0; i<carArr.length; i++) {
        const [[h, m], _, sign] = carArr[i];
        if(sign=='IN') {
            startTime = h*60 + m;
            finishTime = 23*60 + 59; //out이 없을 때를 대비한 디폴트값 
            if(i===carArr.length-1) {
                totalTime += finishTime - startTime;
            }
        } else {
            finishTime = (h*60 + m);
            totalTime += finishTime - startTime;
        }
    }
    console.log("totalTime", totalTime)
    return totalTime;
}

//set으로 모든 차번호 받고 어레이 변환 후 정렬
//그걸로 for문 돌려서 차번호끼리만 묶어서 배열 만듦 

//fee = 기본 시간, 요금 , 단위 시간, 요금

//차량 번호 작은거부터 요금
//출차없으면 2359 출차로 간주 

//일단 동일한 번호인거 records 모아놔 - 스택큐? 
//한 입출차 쌍으로만 총 시간 계산해야되네 