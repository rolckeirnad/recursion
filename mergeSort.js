function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let left;
  let right;
  if (arr.length > 1) {
    const middle = Math.round(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    left = mergeSort(leftArr);
    const rightArr = arr.slice(middle);
    right = mergeSort(rightArr);
  }
  let merged = [];
  while (left.length != 0 && right.length != 0) {
    left[0] < right[0] ? merged.push(left.shift()) : merged.push(right.shift());
  }
  if (left.length == 0) 
    return [...merged, ...right];
  else 
    return [...merged, ...left];
}
