// 왔다갔다 해야하는 부분 고려 못함
function solution(name) {
    var count1 = 0;
    var count2 = 0;

    var arr = [];
    for(let i=65; i<=90; i++){
        arr.push(String.fromCodePoint(i));
    }
    const map = new Map();
    arr.forEach((e,i)=>{
        if(i>13) i=26-i;
        map.set(e, i);
    })
    console.log(map); 

    count1 += map.get(name[0]) //첫번째는 일단 더하고
    count2 += map.get(name[0]) //첫번째는 일단 더하고

    outer:for(let i=1; i<name.length; i++) { //1~끝
        inner:for(let k=i; k<name.length; k++) { //A 있는지 체크
            if(name[k] === 'A') { //A가 연속되는지
                if(k===name.length-1) break outer; //A가 연속되어 마지막까지 오면 그대로 이 count1 유지해서 종료
                continue; //마지막 아닌 경우 계속 돌려보며 A 연속되는지 관찰
            }
            else break; //i==A 아니면 나가
        }
        count1+=map.get(name[i]); //그 문자열의 map value만큼 
        count1++ //오른쪽 한번 이동 소요
        console.log("a", count1)
    }

    outer:for(let i=name.length-1; i>0; i--) { //끝~1
        inner:for(let k=i; k>0; k--) {
            if(name[k] === 'A') { //A가 연속되는지
                if(k===1) break outer; //A가 연속되어 마지막까지 오면 그대로 이 count2 유지해서 종료
                continue; //마지막 아닌 경우 계속 돌려보며 A 연속되는지 관찰
            }
            else break; //i==A 아니면 나가
        }
        count2+=map.get(name[i]);
        count2++
        console.log("b", count2)
    }

    console.log("최종1", count1)
    console.log("최종2", count2)
    return count1 > count2 ? count2 : count1;
}
solution("ABAAAAAAAAABB") //7


//윤코드
function solution(name) {
    var answer = 0;
  
    let min = name.length - 1;
  
    for (let i = 0; i < name.length; i++) {
      let tmp = name.charCodeAt(i);
  
      if (tmp < 78) {
        answer += tmp % 65;
      } else {
        answer = answer + 91 - tmp;
      }
  
      let nextIndex = i + 1;
  
      while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65)
        nextIndex += 1;
  
      if (i == 0) min = Math.min(name.length - nextIndex, min);
      else min = Math.min(2 * i + name.length - nextIndex, min);
  
      // 처음부터 뒤로 가는 경우
      if (i == 0) min = Math.min(min, name.length - nextIndex);
      else min = Math.min(min, i + (name.length - nextIndex) * 2);
    }
    answer = answer + min;
    return answer;
  }