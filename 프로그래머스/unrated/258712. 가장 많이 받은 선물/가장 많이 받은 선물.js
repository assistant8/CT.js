function solution(friends, gifts) {
    var answer = 0;
    const leng = friends.length;
    let next = {};
    let book = Array.from(Array(leng), ()=>Array(leng).fill(0));
    const fmap = {};
    let score = {};
    friends.forEach((e,idx) => score[e]=0);
    friends.forEach((e,idx) => fmap[e]=idx);
    gifts = gifts.map(e => e.split(" "));  
    friends.forEach(e => next[e] = 0);
    console.log(fmap)
    
    for(let i=0; i<gifts.length; i++) {
        const [give, take] = gifts[i];
        score[give]++;
        score[take]--;
        book[fmap[give]][fmap[take]]++;
    }
    console.log("book", book)
    console.log("score", score)
    
    for(let i=0; i<leng; i++) {
        for(let k=i+1; k<leng; k++) {
            if(book[i][k]>book[k][i]) next[friends[i]]++;
            else if(book[i][k]<book[k][i]) next[friends[k]]++;
            else {
                if(score[friends[i]]>score[friends[k]]) next[friends[i]]++;
                else if(score[friends[i]]<score[friends[k]]) next[friends[k]]++;
            }
        }
    }
    console.log("next", next)

    let max = 0;
    for(let key in next) {
        if(max < next[key]) max = next[key]
    }
    
    return max;
}

//각 사람들을 숫자로 맵핑 시키는 객체 fmap

//각 사람들이 담달 받을 선물 개수 저장할 객체 생성 next 

//테이블 만듦 - 모두 0으로 초기화 후 gift 반벅문 돌려서 값 채워나감 book

//행단위로 01, 02, 03, 12, 13, 23 만 봄
//01볼때 10과 비교해서 그 사람에게 +해줌

//gift 따로 반복문 돌려서 각 사람의 선물지수 구함 