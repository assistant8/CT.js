function solution(input_string) {
    var answer = '';
    const leng = input_string.length;
    const record = {};
    const isAlone = {};
    for(let i=0; i<26; i++) {
        const char = String.fromCharCode(97+i);
        record[char] = [];
        isAlone[char] = false;
    }
    for(let i=0; i<leng; i++) {
        const char = input_string[i];
        if(input_string[i-1] !== char && record[char].length) { //연속되지 않고, 이전에 있던 문자면 
            isAlone[char] = true;
        }
        record[char].push(i); //출현 시 기록
    }
    for(let key in isAlone) {
        if(isAlone[key]) answer+=key;
    }
    return answer==='' ? 'N' : answer;
}

//출현 기록 객체, 외톨이 여부 객체 
//출현하면 index 기록만 - 연속인지를 체크해야되니 index-1인지 확인, 아니면 외톨이 