function memoize(fn) {
  const memorized = {}
  return function (...args) {
    const memoizeKey = args.toString()
    if(memoizeKey in memorized) return memorized[memoizeKey]
    const res = fn(...args)
    memorized[memoizeKey] = res
    return res
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(0, 0)); // 5
console.log(memoizedFn(0, 0)); // 5
console.log(callCount); // 1
