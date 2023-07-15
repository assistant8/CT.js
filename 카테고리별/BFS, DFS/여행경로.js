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
  