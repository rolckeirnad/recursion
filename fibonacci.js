function fibsRec(n) {
  if (n == 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  const arr = fibsRec(n - 1);
  return arr.concat(arr[n - 2] + arr[n - 3]);
}
