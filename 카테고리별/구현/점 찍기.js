
function solution(k, d) {
    let answer = 0;
    // 1) x좌표 값 만큼 반복 실행
    for (let x = 0; x <= d; x += k) {
        // 2) 원점과의 거리 y의 좌표를 구한다.
        let y = parseInt(Math.sqrt(d**2 - x**2));
        console.log("x,y", x,y)
        
        // 3) y 좌표 내부 찍을 수 있는 점의 개수
        answer += parseInt(y/k) + 1;
        console.log(parseInt(y/k))
    }
    return answer;
}

console.log(solution(2,4))
// https://cocococo.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JavaScript-Lv2-%EC%A0%90-%EC%B0%8D%EA%B8%B0