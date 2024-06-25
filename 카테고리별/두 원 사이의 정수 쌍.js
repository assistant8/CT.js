function solution(r1, r2) {
    var answer = 0;
    for(let x=1; x<=r2; x++) {
        const ymax = Math.floor(Math.sqrt(r2*r2 - x*x));
        let temp = r1*r1 - x*x;
        if(temp < 0) temp = 0;
        const ymin = Math.ceil(Math.sqrt(temp));
        
        const count = ymax - ymin + 1;
        // console.log(ymax, ymin, r1*r1 - x*x)
        answer += count;
    }
    return answer * 4;
}

// x좌표 기준 0~r2 반복문 
    // y의 max = 두 원 사이에 올 수 있는 해당 x좌표 기준 가장 큰 y 좌표
    // y의 min
// 원의 방정식 이용 y좌표 = 루트(r^2 - x^2)
// x반복문 내 y반복을 돌리면 n^2으로 시간초과, 어차피 한 x값으로는 y값이 연속적이니 max-min+1로 가능 

// 루트(음수) 불가하므로 따로 처리
// x,y축 중복을 고려해야하는데, x기준 반복문 돌리니까 x=0, y!==0으로 처리가 편함 