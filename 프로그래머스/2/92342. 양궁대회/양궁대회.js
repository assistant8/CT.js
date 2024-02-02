function solution(n, info) {
    // 각 스테이지마다 맞출 수 있는 화살의 개수
    const array = [];
    for(let i=0; i<=10; i++) {
        const a = info[i];
        const arr = [0,0];
        if(a===0) arr[0] = 1;
        else { arr[1] = 0; arr[0] = a+1; }
        array.push(arr);
    }

    // 2^10 경우의 수 구함 - 각 스테이지 마다 idx 0 or 1
    const seq = Array(11).fill(0);
    const result = [];
    function dfs(k) { //2 4
        if(k===10) {
            result.push([...seq])
            return;
        }

        for(let i=0; i<2; i++) {
            seq[k] = array[k][i];
            dfs(k+1);
        }
    }
    dfs(0);

    // 반복문으로 돌면서 각 경우의 수 탐색
    let max = -1;
    let maxArr = [-1];
    for(let i=0; i<result.length; i++) {
        const onecase = result[i]; //하나의 케이스
        let arrowsum = 0; //n 이하여야 함
        let sumScore1 = 0; //이 둘의 차이값 중 최대 구하기 
        let sumScore2 = 0;
        let tempArr = [];
        for(let stage=10; stage>=0; stage--) { 
            let arrow = onecase[10-stage];
            if(stage===0) {
                arrow = n-arrowsum; //남은거에 다쓰기
            }
            else if(arrowsum + arrow > n) arrow = 0; //넘치면 나머지 케이스인 0개
            tempArr.push(arrow);
            arrowsum += arrow;

            if(arrow===0 && info[10-stage]===0); //sumscore 양쪽 계산
            else if(arrow > info[10-stage]) sumScore1+=stage;
            else if(arrow <= info[10-stage]) sumScore2+=stage;
        }
        
        // 차이가 최대인 케이스, 그 중 가장 작은 값을 많이 맞춘 케이스 리턴
        // 최대면 바로 반영, 같으면 그때야 가장 작은 값 있는지 판단해야 (한꺼번에 불가능)
        const diff = sumScore1-sumScore2;
        if(max < diff) {
            max = diff;
            maxArr = tempArr.slice();
        } else if(max === diff) {
            for(let j=10; j>=0; j--) {
                if(tempArr[j]<maxArr[j]) break;
                else if(tempArr[j]>maxArr[j]) {
                    max = diff;
                    maxArr = tempArr.slice();
                    break;
                }
            }
        }
    }
    return (max<=0) ? [-1] : maxArr
}