function solution(sizes) {
    var answer = 0;
    var first = 0
    var second = 0 //w h 중에 작은 것중 가장 큰 것
    
    //각 size[a][b] 에서 ab 둘 중 큰 것을 골라 그 중 최대치, 작은 것을 골라 그 중 최대치 구해서 곱
    for(var i=0; i<sizes.length; i++) {
        if(sizes[i][0]>=sizes[i][1]){
            if(second < sizes[i][1]) second = sizes[i][1]
        } else {
            if(second < sizes[i][0]) second = sizes[i][0]
        }
        for(var k=0; k<2; k++) {
            if(first<sizes[i][k]){
                first = sizes[i][k]
            }                
        }
    } 
    
    answer=first*second
        
    return answer;
}