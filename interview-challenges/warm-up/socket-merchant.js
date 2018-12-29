function sockMerchant(n, ar) {
  ar.sort(function(a, b) {
    return a - b;
  });
  console.log(ar);
  let matchArr = [];
  for (let i = 0; i < n; ++i) {
    if (ar[i] === ar[i + 1]) {
      matchArr.push(ar[i]);
      i++;
    }
  }
  console.log(matchArr);
  return matchArr.length;
}
