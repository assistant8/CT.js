function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length > arr2.length) return 1;
    else if(arr1.length < arr2.length) return -1;
    
    let sum1 = arr1.reduce((e, sum) => e+sum);
    let sum2 = arr2.reduce((e, sum) => e+sum);
    if(sum1 > sum2) return 1;
    else if(sum1 < sum2) return -1;
    else return 0;
}