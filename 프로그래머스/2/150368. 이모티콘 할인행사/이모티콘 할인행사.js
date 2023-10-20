function solution(users, emoticons) {
    var answer = [];
    const salePer = [10, 20, 30, 40];
    const dupSalePercentArr = getDupPermutation(salePer, emoticons.length)
    // console.log(dupSalePercentArr)
 
    const plusProfitArray = [];
    for(let i=0; i<dupSalePercentArr.length; i++) { //이 할인율 조합에 따라
        let plusCount = 0; //해당 조합이 얼마나 가입시키는가 
        let profit = 0; //해당 조합이 가입 제외 얼마나 수익 거두는가 
        for(let j=0; j<users.length; j++) { //이 사람은 어떤 결과를 낼 것인가 
            const [leastPer, budget] = users[j];
            let sum = 0; //해당 인간이 구매하는 총 금액 
            for(let k=0; k<emoticons.length; k++) { //이 for문을 통해 총 상품 가격, 결과를 도출해서 알아내자 
                const salePer = dupSalePercentArr[i][k];
                const emo = emoticons[k];
                let price;
                if(salePer>=leastPer) { //살 수 있으면 
                    price = emo*(100-salePer)/100;
                    sum+=price;
                }
            }
            // console.log(sum)
            if(sum<budget) {
                profit+=sum;
            }else{
                plusCount++;
            }
        }
        plusProfitArray.push([plusCount, profit])
    }   
    console.log(plusProfitArray)
    
    let max = [-1, -1];
    for(let arr of plusProfitArray) {
        if(max[0]<arr[0] || max[0]===arr[0] && max[1]<arr[1]) {
            max = arr;
        }
    }
    
    return max;
}

function getDupPermutation(array, selectNumber) {
    const results = [];
    if(selectNumber === 1){
        return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
        const rest = origin;
        const permutations = getDupPermutation(rest, selectNumber - 1);
        const attached = permutations.map((permutation) => [fixed, ...permutation]);
        results.push(...attached);
    });
    return results;
}

//일단 브루트포스로 이모티콘이 될 수 있는 모든 값을 for문으로 감싸고
//그 안에서 유저들 for문 돌려서 총 결과를 뱉어내보자 일단 - 그러려면 할인율 유지해야함 
//그리고 그 결과를 보고 플러스 요금제 최대로 가입시키고
//그 뒤에 차액의 최고점을 생각하자 