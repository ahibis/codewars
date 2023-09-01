const cache = []
function fib(n: number) {
  if (n < 2 && n > 0) {
    return [0n, 1n][n];
  }
  let first = 0n;
  let second = 1n;
  let value = 0n;
  if (n > 0) {
    for (let i = 0; i < n - 1; i += 1) {
      value = first + second;
      [first, second] = [second, value];
    }
    return value;
  }

  for (let i = 0; i < -n; i += 1) {
    value = second - first;
    [first, second] = [value, first];
  }
  return value;
}
console.log(fib(20));
