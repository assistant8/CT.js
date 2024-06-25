function solution(sequence, k) {
    var answer = [];
    const leng = sequence.length;
    let left = 0;
    let right = 0;
    let sum  = sequence[0];
    let min = Infinity; //가장 짧은 길이 
    
    while(right < leng) { //left가 아님!
        if(sum < k) {
            right++;
            sum+=sequence[right];
        } else if(sum > k) {
            sum-=sequence[left];
            left++;
        } else { //k와 동일
            const long = right - left + 1;
            if(long < min) {
                min = long;
                answer = [left, right];
            }
            sum-=sequence[left];
            left++;
        }
    }
    return answer;
}

//연속부분수열 중 가장 짧은, 가장 앞쪽 

//left right = 0
//right < seq 
    //left로 하면 right는 idx 벗어나는 오류, left로 해도 엣지 잡아주는 듯
//minlength, answer 업데이트 
//k이상이면  sum-=[left], left++,
//k이하이면 right++, sum+=[right]