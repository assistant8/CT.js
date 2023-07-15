function solution(maps) {
    const n = maps.length;
    const m = maps[0].length; //각 가로 세로 길이
    if(n===1 && m===1) return 1; //한 칸인 경우
    
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1]; //가로 세로로 한칸씩 움직이기 위한 버튼
    const queue = [[0, 0]]; //시작점 queue
    maps[0][0] = 1; //시작점
    
    while (queue.length > 0) { //큐에 있는게 없을 때까지
        const [x, y] = queue.shift(); //현재 큐 -> x y 추출
        for (let i = 0; i < 4; i++) { //상하좌우
            const nx = x + dx[i];
            const ny = y + dy[i]; //현재 위치에서 상하좌우 얼마나 움직일지 더한거
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue; //벽이면 취소
            if (maps[nx][ny] === 0) continue; //0이라 못가면 취소
            if (maps[nx][ny] === 1) { //1이고 안가본 곳이면 
                maps[nx][ny] = maps[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    return maps[n - 1][m - 1] !== 1 ? (maps[n - 1][m - 1]) : -1;
}
