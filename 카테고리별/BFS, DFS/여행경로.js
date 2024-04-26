function solution(tickets) {
    const stack = [];
    const graph = {};
  
    tickets.sort(); //알파벳 순 정렬 
  
    for (const [from, to] of tickets) { //각 출발지에서 어떤 도착지가 있는지 객체에 저장
      graph[from] = graph[from] || [];
      graph[from].push(to); //value(도착지)는 객체 
    }
  
    function dfs(from) { //출발지 기준
      const dests = graph[from]; //dests = 모든 목적지 
  
      while (dests && dests.length) { //모든 목적지에 대해
        dfs(dests.shift()); //알파벳 앞에 있는 순으로 dfs 
      }
  
      stack.push(from); //그 출발지에서 갈곳 다 갔으면 
    }
  
    dfs("ICN");
  
    return stack.reverse();
  }
  
  [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]
  // expected output: ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
  

// 240426
/////////////
function solution(tickets) {
  var answer = [];
  let map = new Map();
  const leng = tickets.length + 1;
  let count = 0;
  
  for(let i=0; i<tickets.length; i++) {
      const [start, end] = tickets[i];
      if(map.get(start)) map.get(start).push(end);
      else map.set(start, [end]);
      
      if(!map.get(end)) map.set(end, []);
  }
  for(let [key, value] of map) {
      value.sort()
  }
  
  const stack = ["ICN"];
  
  while(1) {
      const place = stack.pop();
      answer.push(place);
      if(answer.length === leng) break;
      
      let next = map.get(place).shift();
      if(answer.length !== leng-1 && map.get(next).length === 0) {
          map.get(place).push(next);
          next = map.get(place).shift();
      }
      stack.push(next)
  }
  return answer
}

// 공항마다 도착지를 배열로 가지고 정렬함
// 인천부터 시작해서 bfs 돌림 
//answer에 모두 푸시가 될때까지.
//다음 장소는 stack.push
//map에서 next의 배열이 비었고, 마지막이 아니라면 last = next 하고 next = 현재의 다음 shift
//1번 런타임은 도저히 모르겠음 

solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]);
solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]);
solution([["ICN", "D"], ["D", "ICN"], ["ICN", "B"]]);
solution([["ICN", "JFK"], ["ICN", "AAD"], ["JFK", "ICN"]]);