const str = "encrypt secretword 3 helloworld";
// const str = "decrypt secretword 3 cspkfcgzin";
const [mode, secretString, rotate, msgString] = str.split(" ");
const leng = secretString.length;

const secret = [];
const msg = [];
const array = [];

//encrypt
if (mode === "encrypt") {
  for (let i = 0; i < leng; i++) {
    const char = secretString[i];
    secret.push(char.charCodeAt(0) - 97); // a = 97 = 0
    const char2 = msgString[i];
    msg.push(char2.charCodeAt(0) - 97);
    let node = secret[i] + msg[i];
    if (node > 25) node = (node % 25) - 1; //
    array.push(node);
  }
  if (rotate >= 0) rotateLeft(rotate);
  else rotateRight(Math.abs(rotate));

  const strArray = [];
  for (let i = 0; i < leng; i++) {
    const num = array[i];
    const char = String.fromCharCode(num + 97);
    strArray.push(char);
  }
  console.log(strArray.join(""));
} else { //decrypt
  for (let i = 0; i < leng; i++) {
    const char = secretString[i];
    secret.push(char.charCodeAt(0) - 97);
    const char2 = msgString[i];
    array.push(char2.charCodeAt(0) - 97);
  }

  if (rotate >= 0) rotateRight(rotate);
  else rotateLeft(Math.abs(rotate));

  const answerArr = [];
  for(let k=0; k<leng; k++) {
    const node = array[k];
    const secretNode = secret[k];
    let value;
    if(node < secretNode) {
        value = node - secretNode + 26;
    } else {
        value = node - secretNode;
    }
    answerArr.push(value);
  }

  const strArray = [];
  for (let i = 0; i < leng; i++) {
    const num = answerArr[i];
    const char = String.fromCharCode(num + 97);
    strArray.push(char);
  }
  console.log(strArray.join(""));
}

function rotateLeft(num) {
  for (let k = 0; k < num; k++) {
    const first = array.shift();
    array.push(first);
  }
}

function rotateRight(num) {
  for (let k = 0; k < num; k++) {
    const last = array.pop();
    array.unshift(last);
  }
}

//secret, msg 모두 숫자로 변환하여 배열에 저장
//둘이 합함
//rotate 시킴
//알파벳으로 바꿈

//secret, msg 숫자로 바꿈
//rotate 반대로 시킴
//합해진 배열인데, 여기서 secretword를 뺌
//음수가 나오면 +25+1
//해당 배열을 알파벳으로 바꿈

// if (node > 25) node = (node % 25) - 1;
  // 유니코드 0~25까지 알파벳은 26개, 26이면 a이고 26%25-1 = 0
  // 돌이켜보니 node = (node % 26) or node -= 26 이게 로직상 맞는 것 같음 