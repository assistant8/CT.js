function answer(n,arr){ 
    let num_min = [0,0,1,7,4,2,6,8,10];  //최소값 초기화
    let num = [0, 0, 1, 7, 4, 2, 0, 8, 10];
    let Min_Dp = Array.from({length:101} , () => Infinity);
    let maxDp = Array.from({length:101} , () => "");
    let add = ["1","7","4","2","0","8"];  //최소값에서 사용하는 최소 값을 가지는 성냥개비 숫자
    let add2 = ["0","0","1","7","4","2","6","8"]; //최대값
    //DP 최소값 초기화
    for(let i=0; i<9; i++){
        Min_Dp[i] = num_min[i];
    }  
    //초기값 이후 부터 값 DP실행 
    for(let i=9;i<=100;i++) {
        for(let j=2;j<=7;j++) {
            let value = Min_Dp[i-j]+add[j-2];  // 글자두개 str로 이어붙이기
            //console.log("값확인",i,value , i-j);
            Min_Dp[i] = Math.min(parseFloat(value), Min_Dp[i]);
        }
    }
    maxDp[2] = "1";
    for(let i=3;i<=100;i++) {
        let line = "";
        if(i%2==0) { //짝수면
            for(let k=0;k<i/2;k++) {
                line += "1";
            }
        } else { 
            let val = parseInt(i/2-1); 
            for(let k=0;k<val;k++) {
                line += "1";
            }
            line = add2[i-(val*2)] + "" + line;  
            //line = "7" + "" + line;
            console.log("test", add2[i-(val*2)],line)
            //console.log("홀수", add2[i-(val*2)] , i  ,(val*2));
        }
        maxDp[i] = line;
    }
    for(let i=0;i<n;i++) {
        M = arr[i];
        console.log(Min_Dp[M] , maxDp[M]); 
    }  
    for(let i=0;i<11;i++) { 
        console.log(i,Min_Dp[i] , maxDp[i]); 
    } 
}