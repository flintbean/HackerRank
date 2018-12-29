// Complete the countingValleys function below.
function countingValleys(n, s) {
  let level = 0;
  let valley = 0;

  for (let i = 0; i < n; ++i) {
    if (s[i] === "U") {
      level++;
    } else if (s[i] === "D") {
      level--;
    }
    if (level === 0 && s[i] === "U") {
      valley++;
    }
  }
  return valley;
}
