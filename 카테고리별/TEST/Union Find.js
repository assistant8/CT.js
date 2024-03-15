function main(n) {
    /*
    인덱스는 노드 번호를 뜻하고 요소는 부모 노드를 의미
    최초 배열은 자기 자신이 부모 노드
    예) 입력 n = 3 -> [empty, 1, 2, 3] 배열 생성
                      노드 1의 부모 노드: 1,
                      노드 2의 부모 노드: 2,
                      노드 3의 부모 노드: 3
    */
    const parent = new Array(n);
  
    for (let i = 1; i <= n; i++) {
      parent[i] = i;
    }
    
    // 간선 연결
    unionParent(parent, 1, 2);
    unionParent(parent, 2, 3);
    unionParent(parent, 4, 6);
    unionParent(parent, 6, 5);
    unionParent(parent, 7, 8);
  
    console.log(parent); // [1, 1, 1, 4, 4, 4, 7, 7]
  
    console.log(findeParent(parent, 1, 2)); // true
    console.log(findeParent(parent, 1, 3)); // true
    console.log(findeParent(parent, 3, 5)); // false
    console.log(findeParent(parent, 4, 5)); // true
    console.log(findeParent(parent, 6, 8)); // false
  }
  
  // 최상위 부모 노드를 찾는 재귀 함수
  function getParent(parent, n) {
    if (parent[n] === n) return n;
  
    return (parent[n] = getParent(parent, parent[n]));
  }
  
  // 두 개의 노드를 같은 부모 노드로 병합하는 함수
  function unionParent(parent, a, b) {
    a = getParent(parent, a);
    b = getParent(parent, b);
  
    // 두 노드 중 부모 노드 값이 더 작은 값으로 합친다
    if (a < b) parent[b] = a;
    else parent[a] = b;
  }
  
  // 2개의 노드가 같은 부모 노드를 가졌는지 확인하는 함수
  function findeParent(parent, a, b) {
    a = getParent(parent, a);
    b = getParent(parent, b);
  
    if (a === b) return true;
    else return false;
  }
  
  main(8);