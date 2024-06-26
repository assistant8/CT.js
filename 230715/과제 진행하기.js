function solution(plans) {
  var answer = [];
  let hash  ={}

  // plans를 순회하며 hash에 {시작시간:[과제시간,과목명]}으로 삽입.
  // 시작시간의 경우 분으로 단위를 통합.
  plans.forEach(el=>{
      el[1] = convertTime(el[1])
      el[2] = Number(el[2])
      hash[el[1]] = [el[2],el[0]]
  })

  // 시작시간기준으로 오름차순 정렬
  plans.sort((a,b)=>a[1]-b[1])

  // 시작시간부터 1분씩 증가하는 반복문시작.
  let startTime = plans[0][1]
  let stack =[]
  let finish = 0          // 과제를 마친 과목의 갯수를 카운팅하는 변수
  while(finish<plans.length){           // 과제를 다할떄까지 반복.

      // stack에 top인 요소의 과제시간을 1분씩 깎는다.
      // 과제시간이 0분이 된 경우 정답에 추가하고 stack.pop() , finish++
      if(stack.length){
          stack[stack.length-1][0]--
          if(stack[stack.length-1][0] ===0) {
              answer.push(stack[stack.length-1][1])
              stack.pop()
              finish++
          }
      }

      // 과제 시작시간인 과목이 있을경우 스택에 [과제시간,과목명]추가.
      if(hash[startTime]) stack.push(hash[startTime])
      startTime++
  }

  // 분으로 통합하는 함수
  function convertTime(str){
      let [h,m] = str.split(':').map(Number)
      return h*60+m
  }

  return answer;
}

console.log(solution([["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]]))


///////////////////////////////240626 재풀이 성공
function solution(plans) {
    const answer = [];
    const leng = plans.length;
    
    for(let i=0; i<leng; i++) {
        const [subject, start, playtime] = plans[i];
        const [hour, minute] = start.split(":").map(Number);
        const converted = hour*60 + minute;
        plans[i][1] = converted;
        plans[i][2] = Number(playtime);
    }
    plans.sort((a,b)=>a[1] - b[1]);
    console.log(plans);
    
    const stack = []; // [과목,남은시간]
    let currenttime;

    // playtime을 다음꺼의 start 될때까지 차감 + 1이상이면 stack에 쌓음
    for(let i=0; i<leng; i++) {
        const [subject, start, playtime] = plans[i];
        const nextstart = i===leng-1 ? Infinity : plans[i+1][1]; //다음 과목 시작시간, 마지막이면 무한대
        const time = playtime - (nextstart - start); // 이번 과목의 남은 시간 (0이하면 다끝낸거임)
        if(time > 0) { // 이번꺼 다 못끝내고 바로 다음꺼 start한 경우
            stack.push([subject, time]);
            currenttime = nextstart;
            continue;
        } else { //이번꺼 다 끝낸 경우
            currenttime = start + playtime;
            answer.push(subject); 
        }

        while(stack.length) {
            // console.log(i, currenttime, stack)
            const resttime = nextstart - currenttime; //다음 시작까지 남은 시간
            if(resttime > 0) {
                const [subject, time] = stack.pop();
                const subresttime = time - resttime; //해당 과목 남은 시간
                if(subresttime > 0) { //과목 안끝났다면 
                    currenttime += time; //현재 시간 업데이트
                    stack.push([subject, subresttime]); // 다시 남은시간 고려해서 스택 푸시 
                } else { //과목 끝났다면
                    currenttime += time;
                    answer.push(subject); //과목 끝났으면
                }
            } else break; //시간 다됐으면
        }
    }
    
    return answer;
}

// 시간문제에서 시/분으로 나오면 분단위로 초기화하여 계산
// 과목 별 분단위로 전환 후 시작시간 정렬


// 매초마다 반복문 돌리면서 start==t인게 있는지 확인??
    // let current = "";
    // let idx = 0;
    // let next = idx+1;
    // for(let t=1; t<=1540; t++) {
    //     const [subject, start, playtime] = plans[idx];
    //     if(start === t) {
    //         current = subject;
    //         idx++;
    //     }
    // }