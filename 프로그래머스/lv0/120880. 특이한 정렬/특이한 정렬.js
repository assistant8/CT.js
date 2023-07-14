function solution(numlist, n) {
    var answer = [];
    numlist.sort((a,b)=>{
        if(Math.abs(n-a) === Math.abs(n-b)) return b-a
        else return Math.abs(n-a)-Math.abs(n-b)
    })
    console.log(numlist)
    return numlist;
}