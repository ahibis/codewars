function hamming(number: number) {
  const arr = [1];
  let res = 1;
  let x2 = 2,
    x3 = 3,
    x5 = 5;
  let i = 0,
    j = 0,
    k = 0;
  for (let n = 1; n < number; n += 1) {
    res = Math.min(x2, x3, x5);
    arr.push(res)
    if (x2 == arr[n]) {
      i += 1;
      x2 = 2 * arr[i];
    }
    if (x3 == arr[n]) {
      j += 1;
      x3 = 3 * arr[j];
    }
    if (x5 == arr[n]) {
      k += 1;
      x5 = 5 * arr[k];
    }
  }
  console.log(arr)
  return res;
}
console.log(hamming(5));
