console.log(
  solution(
    [
      "java backend junior pizza 150",
      "java backend junior pizza 1500",
      "java backend junior pizza 15",
      "java backend junior pizza 160",
      "python frontend senior chicken 210",
      "python frontend senior chicken 150",
      "cpp backend senior pizza 260",
      "java backend junior chicken 80",
      "python backend senior chicken 50",
    ],
    [
      "java and backend and junior and pizza 100",
      "python and frontend and senior and chicken 200",
      "cpp and - and senior and pizza 250",
      "- and backend and senior and - 150",
      "- and - and - and chicken 100",
      "- and - and - and - 150",
    ]
  )
);

function solution(info, query) {
    var answer = [];
    info = info.map((e) => e.split(" "));
    query = query.map((e) => {
      const arr = e.split(" and ");
      const last = arr.pop().split(" ");
      return [...arr, ...last];
    });
    // console.log(info)
    // console.log(query)

    let infoMap = new Map();
    for(let i=0; i<info.length; i++) {
        const person = info[i];
        const score = Number(person.pop());
        const personstr = person.join(" ");
        if(infoMap.get(personstr)) infoMap.get(personstr).push(score);
        else infoMap.set(personstr, [score]);
    }
    for(const [key, value] of infoMap) {
        infoMap.get(key).sort((a,b)=>a-b);
    }
    // console.log(infoMap)

    for (let i = 0; i < query.length; i++) {
        const q = query[i];
        let count = 0;
        outer: for(const [key, value] of infoMap) {
            const keyArr = key.split(" ");
            for(let k=0; k<4; k++) {
                if (q[k] === "-") continue;
                if (q[k] !== keyArr[k]) continue outer;
            }

            // 이분탐색으로 target 이상인 score 개수 찾기
            const target = q[4]; 
            let left = 0;
            let right = value.length - 1;
            while(left <= right) {
                let mid = Math.floor((left+right)/2);
                
                if(value[mid] >= target) {
                    count += right - mid + 1;
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
        answer.push(count);
    }
    return answer;
}

// 시간초과 해결방안
// infomap 도입 = 최대 길이(경우의 수) 3*2*2*2
    // 기존 info로 하면 최대 길이 500000
    // 하지만 key값을 배열->문자열로 전환

// value 값인 score 배열은 최악의 경우 info 길이(500000)와 동일
    // 아래에서 이분탐색으로 전환 
    // for(let j=0; j<value.length; j++) {
    //     if(value[j]>=q[4]) count++;
    // }


// 처음 코드, 시간초과 
function solution2(info, query) {
  var answer = [];
  info = info.map((e) => e.split(" "));
  query = query.map((e) => {
    const arr = e.split(" and ");
    const last = arr.pop().split(" ");
    return [...arr, ...last];
  });

  for (let i = 0; i < query.length; i++) {
    const q = query[i];
    let count = 0;
    outer: for (let k = 0; k < info.length; k++) {
      const p = info[k];
      for (let j = 0; j < 4; j++) {
        if (q[j] === "-") continue;
        if (q[j] !== p[j]) continue outer; // 다른게 있다면 count 안함, 중단
      }
      if (Number(q[4]) <= Number(p[4])) {
        count++;
      }
    }
    answer.push(count);
  }
  return answer;
}