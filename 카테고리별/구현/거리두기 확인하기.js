function solution(places) {
    var answer = [];
    
    for(let i=0; i<5; i++) {
        const place = places[i];
        const isSafe = check(place);
        answer.push(isSafe)
    }
    
    return answer;
}

// 각 장소마다 체크 
function check(place) {
    const people = [];
    for(let i=0; i<5; i++) {
        for(let k=0; k<5; k++) {
            if(place[i][k]==="P") people.push([i,k])
        }
    }

    for(let i=0; i<people.length; i++) {
        for(let k=i+1; k<people.length; k++) {
            const person1 = people[i];
            const person2 = people[k];
            const distance = getDistance(person1, person2)
            if(distance===1) return 0;
            else if(distance===2) {
                if(!check2(person1, person2)) return 0;
            }
        }
    }
    return 1;

    function check2(p1, p2) {
        const [x1, y1] = p1;
        const [x2, y2] = p2;
        if(x1===x2 || y1===y2) {
            const mid = place[(x1+x2)/2][(y1+y2)/2];
            if(mid==="O") return false;
        } else {
            const mid1 = place[x1][y2];
            const mid2 = place[x2][y1];
            if(mid1==="O" || mid2==="O") return false;
        }
        return true;
    }
}

function getDistance(p1, p2) {
    return Math.abs(p1[0]-p2[0]) + Math.abs(p1[1]-p2[1]);
}

// p인 애들 좌표 쫙 조사
// p들끼리 모두 거리 조사, 자기보다 좌표 높은 애들만 조사

// 거리가 2 이하이면 x로 막혀있는지 조사 
// 거리 1이면 return 0
// 거리 2이면 floor, ceil 해서 사이값 구하고 (빨간구간)
// 빨간이 0이면 return 0
// 모두 돌렸을 때 return 안됐으면 return 1

// 두 점이 대각으로 위치해있을 때 사이 두 점은
// place[x1][y2] place[x2][y1]