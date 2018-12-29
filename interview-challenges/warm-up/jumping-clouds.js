function jumpingOnClouds(c) {
  let current = 0;
  let i = 0;
  let count = 0;
  while (current < c.length - 1) {
    if (c[i + 2] && c[i + 2] === 1) {
      i++;
      current++;
      count++;
    } else {
      i += 2;
      current += 2;
      count++;
    }
  }
  return count;
}
