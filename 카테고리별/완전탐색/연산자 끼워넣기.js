const dfs = (count = 0, result = A[0]) => {
    if (count === N - 1) {
      max = Math.max(max, result);
      min = Math.min(min, result);
    } else {
      for (let i = 0; i < 4 ; i++) {
        if (!operators[i]) {
          continue;
        }
        operators[i]--;
        dfs(count + 1, calculate[i](result, A[count + 1]));
        operators[i]++;
      }
    }
  };