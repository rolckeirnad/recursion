function fibsRec(n) {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];
  const arr = fibsRec(n - 1);
  return arr.concat(arr[n - 1] + arr[n - 2]);
}
