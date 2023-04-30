function solution(tickets) {
  const stack = [];
  const graph = {};

  tickets.sort();

  for (const [from, to] of tickets) {
    graph[from] = graph[from] || [];
    graph[from].push(to);
  }

  function dfs(from) {
    const dests = graph[from];

    while (dests && dests.length) {
      dfs(dests.shift());
    }

    stack.push(from);
  }

  dfs("ICN");

  return stack.reverse();
}
