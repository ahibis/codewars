function grasshopper(n: number) {
  if (n < 2) return n;
  let a = 1;
  let b = 1;
  let buf = 1;
  for (let i = 0; i < n-1; i += 1) {
    buf = b;
    b = a + b;
    a = buf;
  }
  return b
}
console.log(grasshopper(12))

