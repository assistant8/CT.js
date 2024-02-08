function solution(id_list, report, k) {
    // 이름과 idx 매칭시키는 map, 각 값은 신고당한 횟수
    const reportedMap = new Map();
    id_list.forEach(e => reportedMap.set(e, 0))
    
    // key는 신고자, value는 set 자료구조로 피신고자
    const map = new Map();
    id_list.forEach(e => map.set(e, new Set()));
    for(let i=0; i<report.length; i++) {
        const [reporter, reported] = report[i].split(" ");
        map.get(reporter).add(reported);
    }
    // console.log("map", map)
    
    // 피신고자 반복문 돌면서 reportedMap 신고당한 횟수 업뎃 
    for(const [key, value] of map) {
        for(const person of value) {
            reportedMap.set(person, reportedMap.get(person)+1);
        }
    }
    // console.log("reportedMap", reportedMap)

    
    // ban인 아닌 애들 map에서 삭제
    const answer = new Array(id_list).fill(0);
    for(const [key, setArr] of map) {
        for(const person of setArr) {
            if(reportedMap.get(person) < k) setArr.delete(person)
        }
    }
    // console.log("map", map)
    for(let i=0; i<id_list.length; i++) {
        answer[i] = map.get(id_list[i]).size;
    }
    return answer;
}

// 동일 유저 신고 횟수는 1회
// 정지 당한 유저 신고한 모든 유저에게 메일 