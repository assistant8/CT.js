function maxSquareArea(n, k, grid) {
    let maxArea = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let count = 0;

            // 현재 위치부터 k개 이하로 색을 변경
            for (let x = i; x < n; x++) {
                for (let y = j; y < n; y++) {
                    if (grid[x][y] !== grid[i][j]) {
                        count++;
                    }

                    if (count > k) {
                        break;
                    }

                    // 현재까지의 정사각형 넓이 계산
                    const sideLength = Math.min(x - i + 1, y - j + 1);
                    maxArea = Math.max(maxArea, sideLength * sideLength);
                }
            }
        }
    }

    return maxArea;
}

function maxSquareArea1(n, k, grid) {
    let maxArea = 0;

    // dp 배열 초기화
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0) {
                dp[i][j] = dp[i - 1][j] + (grid[i][j] !== grid[i - 1][j] ? 1 : 0);
            } else {
                dp[i][j] = grid[i][j] !== 0 ? 1 : 0;
            }

            let minColor = Infinity;

            // 현재 위치부터 역방향으로 검사
            for (let x = i; x >= 0; x--) {
                const width = i - x + 1;
                const height = dp[i][j] - (x > 0 ? dp[x - 1][j] : 0);

                minColor = Math.min(minColor, height);

                if (minColor > k) {
                    break;
                }

                maxArea = Math.max(maxArea, width * height);
            }
        }
    }

    return maxArea;
}


// 예시 사용법
const n = 4;
const k = 3;
let grid = [
    [1, 2, 2, 2],
    [1, 2, 1, 1],
    [1, 2, 2, 1],
    [3, 2, 1, 1]
];
// let grid = [
//     [1, 2, 2, 3],
//     [1, 2, 3, 4],
//     [1, 1, 1, 1],
//     [2, 1, 1, 2]
// ];
// let grid = [
//     [1, 1, 1],
//     [2, 2, 2],
//     [1, 2, 1],
// ];

const result = maxSquareArea(n, k, grid);
// const result1 = maxSquareArea1(n, k, grid);
console.log(result); 
console.log(result1); 