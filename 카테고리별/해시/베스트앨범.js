//테케 2개 틀림 - 같은거 index 순으로 하는거 고려 못함
function solution(genres, plays) {
    var answer = [];
    var obj = {};
    for (var i = 0; i < genres.length; i++) {
      //obj에 각 genre의 play 합 기준 정렬
      obj[genres[i]] = (obj[genres[i]] || 0) + plays[i];
    }
  
    const orderedObj = Object.fromEntries(
      //obj value 기준 내림차순 정렬
      Object.entries(obj).sort(([, a], [, b]) => (a > b ? -1 : 1))
    );
  
    for (const key in orderedObj) {
      //obj value 순서로 각 장르 접근
      const temp = [];
      genres.forEach((e, i) => {
        //장르 배열 내에서
        if (key === e) {
          //그 장르라면
          temp.push(plays[i]);
        }
  
        let flag = 1;
        temp.sort((a, b) => { //그 장르 play sort
          if (a === b) {
              for(var i=0; i<plays.length; i++) {
                  if (a === e) { //a가 고유번호 낮음
                      flag = -1;
                      break;
                  }
              }
              return flag;
          }
              return b - a;
          }); 
      });
  
      //그 장르의 play 큰 순 첫번째 두번째 값 기준 각각 genres의 index를 answer에 push
      genres.forEach((e, i) => {
        if (temp[0] === plays[i] && e === key) answer.push(i);
      });
      genres.forEach((e, i) => {
        if (temp[1] === plays[i] && e === key) answer.push(i);
      });
    }
  
    return answer;
  }
