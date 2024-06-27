function solution(program) {
    let answer = Array(11).fill(0);
    let visited = Array(program.length).fill(0);
    program.sort((a,b)=>{
        if(a[0]>b[0]) return 1;
        else if(a[0]<b[0]) return -1;
        else {
            if(a[1]>b[1]) return 1;
            else return -1;
        }
    })
    // console.log(program)
    
    let min = Infinity;
    program.forEach(e => {
        if(e[1]<min) min = e[1];
    })
    
    let current = min;
    for(let i=0; i<program.length; i++) {
        const [order,call,term] = program[i];
        if(visited[i]) continue;
        if(current<call) continue;
        visited[i] = 1;
        answer[order]+=(current-call);
        current+=term;
        i=-1;
    }
    answer[0] = current;
    return answer;
}

//우선 순 정렬
//program 한번 돌려서 수행 시간 최소값 -> 현재 시간으로 정함, 아직 처리 안함
//반복문
    //우선 순으로 탐색
    //현재 시간 기준 호출 시간이 초과하면 continue
    //vitied면 contine
    //선택 시 
        //visited 처리
        //현재 시간 += 수행시간
        //answer[우선순위] += (현재시간-자신의 호출시간)
        //break, i=-1

class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    size() {
      return this.heap.length;
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    push(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
  
      const root = this.heap[0];
      const lastNode = this.heap.pop();
  
      if (!this.isEmpty()) {
        this.heap[0] = lastNode;
        this.heapifyDown();
      }
  
      return root;
    }
  
    heapifyUp() {
      let currentIndex = this.size() - 1;
  
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
  
        if (this.heap[currentIndex][0] < this.heap[parentIndex][0]) {
          this.swap(currentIndex, parentIndex);
          currentIndex = parentIndex;
        } else {
          break;
        }
      }
    }
  
    heapifyDown() {
      let currentIndex = 0;
  
      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let nextIndex = currentIndex;
  
        if (
          leftChildIndex < this.size() &&
          this.heap[leftChildIndex][0] < this.heap[nextIndex][0]
        ) {
          nextIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex < this.size() &&
          this.heap[rightChildIndex][0] < this.heap[nextIndex][0]
        ) {
          nextIndex = rightChildIndex;
        }
  
        if (nextIndex !== currentIndex) {
          this.swap(currentIndex, nextIndex);
          currentIndex = nextIndex;
        } else {
          break;
        }
      }
    }
  
    swap(index1, index2) {
      const temp = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = temp;
    }
  }
  
  function solution(program) {
    const answer = Array(11).fill(0); // 결과 배열 초기화 (인덱스 1부터 사용)
  
    const minHeap = new MinHeap();
  
    for (const [score, time, duration] of program) {
      minHeap.push([score, time, duration]);
    }
  
    let currentTime = 0;
  
    while (!minHeap.isEmpty()) {
      const [score, startTime, duration] = minHeap.pop();
  
      const waitTime = currentTime - startTime;
      answer[score] += waitTime;
  
      currentTime += duration;
    }
  
    answer[0] = currentTime; // 모든 프로그램 종료 시각을 첫 번째 요소에 저장
  
    return answer;
  }
  
  // 테스트
  const program1 = [[2, 0, 10], [1, 5, 5], [3, 5, 3], [3, 12, 2]];
  const result1 = solution(program1);
  console.log(result1); // [20, 5, 0, 16, 0, 0, 0, 0, 0, 0, 0]
  
  const program2 = [[3, 6, 4], [4, 2, 5], [1, 0, 5], [5, 0, 5]];
  const result2 = solution(program2);
  console.log(result2); // [19, 0, 0, 4, 3, 14, 0, 0, 0, 0, 0]
  