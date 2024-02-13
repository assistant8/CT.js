function solution(rows, columns, queries) {
    var answer = [];

    // 오리지널 배열 만들기
    let array = Array.from(Array(rows+1), ()=>Array(columns+1));
    let count = 1;
    for(let i=1; i<=rows; i++) {
        for(let k=1; k<=columns; k++) {
            array[i][k] = count;
            count++;
        }
    }
    console.log(array);

    // query만큼 돌리기 
    for(let i=0; i<queries.length; i++) {
        rotate(queries[i]);
    }

    // 하나의 query 수행 
    function rotate(query) {
        const [x1, y1, x2, y2] = query; //2 2 5 4
        let min = Infinity;
        const copy = array.map(v => [...v])
        for(let i=y1+1; i<=y2; i++) {
            array[x1][i] = copy[x1][i-1];
        }
        for(let i=x1+1; i<=x2; i++) {
            array[i][y2] = copy[i-1][y2];
        }
        for(let i=y1; i<=y2-1; i++) {
            array[x2][i] = copy[x2][i+1];
        }
        for(let i=x1; i<=x2-1; i++) {
            array[i][y1] = copy[i+1][y1];
        }
        answer.push(min)
    }
    
    return answer;
}

console.log(solution(6,6,[[2,2,5,4],[3,3,6,6],[5,1,6,3]]));

// 배열 1,1부터 시작하도록 숫자 채워 만들기

// 함수 내부에 배열 회전시키는 함수 생성
// 덩어리 지어서 값 할당 
// 할당하면서 min 값 정해서 answer push

// 전체적으로 위 함수 query만큼 반복문

// 0,0이 1,1로 불리기 때문에 0번째 행,열 비우고 실데이터를 1,1부터 넣기

// 하나의 그래프로 하려면 계속 이전 상태의 그래프 참조하려는 때 걸림
// - 한번 회전 시마다 직전 상태의 그래프 복사해놓고 참조
// 회전 시 x,y 좌표 +1, -1 규칙 발견하기