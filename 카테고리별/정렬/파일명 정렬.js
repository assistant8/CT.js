function solution(files) {
    var answer = [];
    const temp = Array(files.length);
    for(let i=0; i<files.length; i++) {
        const str = files[i];
        const string = str.split(/[0-9]/g).filter(Boolean)[0].toUpperCase();
        const num = Number(str.match(/[0-9]+/g)[0]);
        temp[i] = [string, num, i];
    }
    temp.sort((a,b)=>{
        if(a[0] > b[0]) return 1;
        else if(a[0] < b[0]) return -1;
        else if(a[0] === b[0]){
            return a[1] - b[1];
        }
    });
    
    for(let node of temp) {
        answer.push(files[node[2]]);
    }

    return answer;
}

// 새로운 배열로 정렬하고 그 순서대로 기존 배열을 정렬해야 함 

// 문자, 숫자 분리는 각각 한번씩 해줘야. split은 기준값을 뱉어주진 않는다
// 정규표현식에서 \는 escape에만 쓰인다
// 새로운 배열 기준 원본 배열을 나타내야 하면 새로운 배열에 원본 배열 index를 갖고 있으면 됨

// 문자열 정렬은 위처럼 대소 비교로 해줘야. 
// sort함수는 애초에 문자열 정렬을 위한 함수이다.