function solution(blocks) {
    const n = blocks.length;
    let dp = Array.from(Array(n), ()=>Array(2).fill(0));
    dp[0][0]=0;
    dp[n-1][1]=0;

    for(let i=1; i<n; i++) {
        if(blocks[i] > blocks[i-1]) dp[i][0] = 0;
        else {
            dp[i][0] = dp[i-1][0] + 1;
        }
    }
    for(let i=n-2; i>=0; i--) {
        if(blocks[i] > blocks[i+1]) dp[i][1] = 0;
        else {
            dp[i][1] = dp[i+1][1] + 1;
        }
    }
    // console.log(dp)
    let max = -1;
    for(let i=0; i<n; i++) {
        const sum = dp[i][0]+dp[i][1];
        if(sum > max) max = sum;
    }
    return max+1;
}

const blocks = [1,5,5,2,6];
console.log(solution(blocks));