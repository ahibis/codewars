function* rangeNeg(n: number, end = 0) {
  for (let i = n; i > end; i -= 1) {
    yield i;
  }
  return 0;
}
const decomposeArr = (n: number): null | number[] => {
  const nSqrt = ~~Math.sqrt(n);
  console.log(n)
  // if (n >= nSqrt ** 2 * 2) 
  //   return null
  if (nSqrt ** 2 == n) return [nSqrt];
  for (let i of rangeNeg(nSqrt)) {
    const v = n - i ** 2
    const arr = decomposeArr(v);
    
    if (arr) return [...arr, i];
  }
  return null;
};
export const decompose = (n: number): null | number[] => {
  const n2 = n ** 2;
  for (let i of rangeNeg(n - 1,n/2)) {
    const arr = decomposeArr(n2 - i ** 2);
    if (arr) return [...arr, i];
  }
  return null;
};
console.log(decompose(50));
