// const myQueue = new Queue();
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// console.log(myQueue); 


// console.log(myQueue.dequeue()); // 1
// console.log(myQueue.dequeue()); // 2

const p = [];
p.push(4,1,2,3)
// console.log(p)
// p.shift();
// console.log(p)

for(let i=0; i<p.length; i++) {
        p.push(p[0])
        p.shift();            
    console.log(i, p)
}

