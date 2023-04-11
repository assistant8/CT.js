function solution(survey, choices) {
     var answer = '';

    var obj = {"R":0,"T":0,"C":0,"F":0,"J":0,"M":0,"A":0,"N":0} //각 지표 점수 저장

    for(var i=0; i<survey.length; i++){
        if(choices[i]==1) {
            obj[survey[i][0]]+=3
        }else if(choices[i]==2){
            obj[survey[i][0]]+=2
        }else if(choices[i]==3){
            obj[survey[i][0]]+=1
        }else if(choices[i]==4){

        }else if(choices[i]==5){
            obj[survey[i][1]]+=1
        }else if(choices[i]==6){
            obj[survey[i][1]]+=2
        }else if(choices[i]==7){
            obj[survey[i][1]]+=3
        }
    }

    console.log(obj)
    
    if(obj.R<obj.T) answer+="T"
    else answer+="R"
    if(obj.C<obj.F) answer+="F"
    else answer+="C"
    if(obj.J<obj.M) answer+="M"
    else answer+="J"
    if(obj.A<obj.N) answer+="N"
    else answer+="A"

    return answer;
}