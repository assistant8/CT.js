async function foo() {
    console.log(1);
    await ohh();
    console.log(2);
}

function bar() {
    console.log(3);
}

async function ohh() {
    console.log(4);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(5);
            resolve();
        }, 10);
    });
}

async function main() {
    console.log(6);
    const a = setTimeout(foo, 0)
    const b = setTimeout(bar, 0)
    console.log(7);
}

main();

// 6 7 1 4 3 5 2

//foo
//await는 해당 비동기(promise)가 해결될 때 까지 함수 실행 일시 중지 
//비동기가 해결되어야 그 결과를 가지고 다음 코드를 진행해야하는 fetch와 같은 느낌
//따라서 1,ohh~~~~,2 순서

//main
//마찬가지로 6,a,b,7 순서로 읽긴 한다!!
//하지만 이건 a에서 foo가 실행되는게 아니라, setTimeout이 콜백인 foo 함수를 0초 후에 실행되도록 예약한거임!
//따라서 6출력, foo예약, bar예약, 7출력, 이후 이벤트 큐에 있는 foo, bar 실행임 
    //콜백은 현재 실행 중인 동기 코드가 완료된 후 이벤트 큐에서 실행 