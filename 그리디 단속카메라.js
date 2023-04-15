function solution(routes) {
    var answer = 0;
    let set = new Set();
    routes.forEach(e=>{ //set에 경계값 할당
        const [a,b] = e;
        set.add(a);
        set.add(b);
    })
    let myArray = Array.from(set);
    myArray.sort((a, b) => b-a);
    set = new Set(myArray); //내림차순 정렬 - set 순회 시 오른쪽에서부터 오도록
    
    let max = 0;
    let count = 0;
    let contain = [];
    let temp = [];
    
    for(let i=0; i<10; i++) { //routes가 없어질때 까지
        for(let item of set) { //모든 지점에서 각각 설치시 count 구함
            count = 0; //각 set에서의 걸리는 지점

            routes.forEach(e=>{ //그 지점에서 각 라우트 걸리는지
                if(item>=e[0]&&item<=e[1]) { //그 라우트 걸린다면
                    count++;
                    temp.push(e); //max 일수도 있으니 그 지점 기록
                }
            })
            // console.log(item, temp, count)
            if(max<count) { //지금 한 set_count가 max보다 컸다면 업뎃
                max=count;
                contain = [...temp];
                temp = [];
            } else { //아니면 contain 필요없음 
                temp = [];
            }
        }
        //결국 위에선 모든 set에 대하여 가장 많이 접하는 구간(contain), count(max) 구함
        
        contain.forEach(function(item) { //routes에서 contain 삭제
            var index = routes.indexOf(item);
            if (index !== -1) {
                routes.splice(index, 1);
            }
        });
        
        console.log("i=", i)
        console.log(contain)
        console.log(routes)
        contain=[];
        max=0;
        answer++;
        if(routes.length===0) return answer;
    }
    return answer;
}

console.log(solution([[-20,-15]]))
//입력 테케 모두 맞는데 제출 테케 틀림.. 뭐가 틀린지 모르겠음