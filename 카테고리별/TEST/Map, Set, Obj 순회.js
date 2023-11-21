// obj는 in만 됨 - in은 key(프로퍼티)
console.log("MAP")
const obj = {};
obj[0] = 1;
obj[1] = 2;
obj[2] = 3;

for(const key in obj) {
    console.log(obj[key])
}

// map은 of만 됨 - [key, value]를 가짐
console.log("MAP")
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);

for (const m of myMap) {
  console.log(m);
}

//set은 of만 됨 - value만 가짐 
console.log("SET")
const mySet = new Set([1, 4, 3, 4, 2]);

for (const value of mySet) {
  console.log(value);
}

console.log(myMap, mySet)

//문자열은 둘다 됨 - of는 value, in은 index 
console.log("STRING");
const str = "AABBCC";

for (const char of str) {
  console.log(char);
}

const arr = Array.from(Array(3), ()=>Array(3).fill(0))

console.log(arr)